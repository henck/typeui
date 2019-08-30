import * as React from 'react';
import styled from '../../styles/Theme';
import { Body, Row, Table, TableInner } from './Styles';
import { DataColumn } from './DataColumn';
import { Head } from './Head';
import { Header } from './Header';
import { Cell } from './Cell';
import { Counter } from './Counter';
import { TDir } from '../Types';
import { Message } from '../Message';
import { Button } from '../Button';
import { Ripple } from '../Ripple/Ripple';
import { Slider } from './Slider';

interface IDataTableProps {
  className?: string;
  children?: React.ReactNode;
  /** 
   * Data for table. TableData.Column elements must provide function
   * to render item fields in each column.
   */
  data: any[];
  /** Current DataTable order */
  order?: string;
  dir?: TDir;
  /** Vertical offset (in pixels) to scroll to after update. */
  scrollTop?: number;
  /** Callback that receives scroll offset on each scroll. */
  onScroll?: (scrollTop:number) => void;
  /** This callback is called when the table needs to fetch more items. */
  onFetch: (offset: number, count: number) => void;
  /** This callback is called when an item is clicked. */
  onClick?: (item:any) => void;
  /** This callback is called when the table sets a new query order. */
  onOrder: (order: string, dir?: TDir) => void;
  /** Element to show when there is no data. */
  nodata?: React.ReactNode;
  /** Currently loading? If true, an amination appears. */
  loading?: boolean;
  /** Show error state? */
  error?: boolean;
}

interface IDataTableState {
  // Is filter element currently shown?
  filterOpen: boolean,
  // 1-based index of first row in viewport
  first: number,
  // 1-based index of last row in viewport
  last: number;
}

const ITEM_HEIGHT = 57;

class DataTableBase<T> extends React.Component<IDataTableProps, IDataTableState> {
  private bodyElement: HTMLDivElement;
  private isScrolling: number;
  // Last fetch operation is stored here so we can repeat it if there was an error.
  private fetch: () => void = null;

  constructor(props: IDataTableProps) {
    super(props);
    this.state = {
      filterOpen: false,
      first: 0,
      last: 0
    };
  }

  // After mounting find the first and last index of the items
  // currently scrolled to, then fetch the corresponding data.
  componentDidMount() {
    let scrollTop = this.props.scrollTop ? this.props.scrollTop : 0;
    let height = this.bodyElement.clientHeight;
    // If height is 0, then the table is invisible. Just fetch the first 25 rows.
    if(height == 0) height = 57 * 25;
    this.fetchData(scrollTop, height);
  }

  // If a scrollTop (in pixels) was given, then scroll the DataTable to that position.
  componentDidUpdate() {
    this.bodyElement.scrollTop = this.props.scrollTop;
  }

  fetchData = (scrollTop: number, height: number) => {
    // Find index of first (partially) visible row.
    let first = Math.floor(scrollTop / 57);
    // Find index of last (partially) visible row.
    let last = Math.floor((scrollTop + height - 1) / 57);
    // Are there any empty records in the range?
    let isEmpty = false;
    for(let i = first; i <= last; i++) {
      if(!this.props.data[i]) isEmpty = true;
    }
    // If there are empty spots, request the records for this segment.
    // In fact, fetch 20 records before and after as well, to minimize 
    // requests on small scrolls.
    if(isEmpty) {
      let firstToFetch = Math.max(0, first - 20);
      let lastToFetch = last + 20;
      this.fetch = this.props.onFetch.bind(this, firstToFetch, lastToFetch - firstToFetch + 1);
      this.fetch();
    }
    // Save position to state. It's used to display currently viewed record range.
    this.setState({
      first: first + 1,
      last: last + 1
    })
  }

  private handleClick(item:any) {
    if(this.props.onClick) {
      // Short delay so ripple effect is seen.
      window.setTimeout(() => this.props.onClick(item), 300);
    }
  }

  private handleScroll = () => {
    // There is no end-scroll event. Instead, we use a timer to determine
    // when scrolling really stops.
    window.clearTimeout(this.isScrolling);
    this.isScrolling = window.setTimeout(() => {
      this.handleEndScroll();
    }, 66);
  }

  // When scrolling ends, we see which rows are currently visible.
  // If any of those rows are empty, we fetch the records for all
  // visible rows.
  private handleEndScroll = () => {
    if(this.props.onScroll) this.props.onScroll(this.bodyElement.scrollTop);
    this.fetchData(this.bodyElement.scrollTop, this.bodyElement.clientHeight);
  }


  private handleRetry = () => {
    if(this.fetch) this.fetch();
  }

  private getHeaders() {
    return React.Children.map(this.props.children, (child:DataColumn) => {
      // Is the column removed? This can happen for conditionally-rendered columns.
      if(!child) return null;
      // Is this column orderable? 
      let orderable = !!child.props.order;
      // Is this column currently sorted?
      let ordered = child.props.order === this.props.order;
      return <Header align={child.props.align} weight={child.props.weight} orderable={orderable} ordered={ordered} dir={this.props.dir} defaultDir={child.props.dir} onClick={orderable ? () => this.props.onOrder(child.props.order, child.props.dir) : null}>{child.props.label}</Header>
    })
  }

  private getData() {
    if(this.state.first == 0) return null;
    // Render about 20 items before and after the visible ones, to that small scrolls
    // do not leave whitespace before rerendering.
    let start = Math.max(this.state.first - 20, 0);
    let end = Math.min(this.state.last + 20, this.props.data.length - 1);
    // Render rows:
    let rows = [];
    for(let i = start; i <= end; i++) {
      let row = this.props.data[i];
      // Do not render empty rows:
      if(!row) continue;
      // Render row:
      rows.push(<Ripple type={Row} key={i} style={{top: (i * ITEM_HEIGHT) + 'px'}} onClick={() => this.handleClick(row)}>{
        React.Children.map(this.props.children, (child:DataColumn) => {
          // Is the column removed? This can happen for conditionally-rendered columns.
          if(!child) return null;
          return <Cell item={row} align={child.props.align} weight={child.props.weight}>{child.props.children}</Cell>
        })
      }</Ripple>);
    }
    return rows;
  }
  
  render() {
    let p = this.props;

    return (
      <div className={p.className}>
        <Table>
          <TableInner>
            <Head loading={p.loading}>
              {this.getHeaders()}
            </Head>
            <Body ref={(el:any) => this.bodyElement = el} onScroll={this.handleScroll}>
              {p.error && 
                <div style={{padding: '25px'}}>
                  <Message type="error">
                    <Message.Header>Error</Message.Header>
                    An error occurred loading data.
                    <div style={{ textAlign: 'right' }}>
                      <Button onClick={this.handleRetry}>Retry</Button>
                    </div>
                  </Message>
                </div>
              }
              {!p.error && <React.Fragment>
                <Slider heightInItems={p.data.length}>
                  {this.getData()}
                </Slider>
                {p.data.length == 0 && !p.loading && 
                  <div style={{padding: '25px'}}>
                    <Message type="warning">
                      <Message.Header>No data</Message.Header>
                      {p.nodata && p.nodata} 
                      {!p.nodata && "Either no data is available, or perhaps your filters are too restrictive."}
                    </Message>
                  </div>
                }
                </React.Fragment>}
            </Body>
            {p.data.length > 0 && <Counter count={p.data.length} first={this.state.first} last={this.state.last}/>}
          </TableInner>
        </Table>
      </div>
    );
  }
}

// A DataTable takes up all vertical space available to it.
// Head and Body are flex-positioned vertically.
const DataTableStyled = styled(DataTableBase)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

// Add static fields to DataTableStyled.
class DataTable extends React.Component<IDataTableProps, {}> {
  public static displayName = 'DataTable';
  public static Column = DataColumn;
  render() {
    return (
      <DataTableStyled {...this.props}></DataTableStyled>
    );
  }
}

export { DataTable };