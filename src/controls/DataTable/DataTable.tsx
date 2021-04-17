import * as React from 'react';
import styled from '../../styles/Theme';

// Types
import { TDir } from '../Types';

// Other controls
import { Body, Table, TableInner } from './Styles';
import { DataColumn } from './DataColumn';
import { Head } from './Head';
import { Header } from './Header';
import { Cell } from './Cell';
import { Counter } from './Counter';
import { Slider } from './Slider';
import { Message } from '../Message/Message';
import { Button } from '../Button/Button';
import { Ripple } from '../Ripple/Ripple';
import { CSSTransition } from 'react-transition-group';
import { Row } from './Row';

interface IDataTableProps {
  className?: string;
  children?: React.ReactNode;
  /** 
   * Data for table. TableData.Column elements must provide function
   * to render item fields in each column.
   */
  data: any[];
  /** Current DataTable order field name, e.g. `name`. */
  order?: string;
  /** Current DataTable order direction (`asc` or `desc`). */
  dir?: TDir;
  /** Optional vertical offset (in pixels) to scroll to after update. */
  scrollTop?: number;
  /** Callback that receives scroll offset in pixels when a scroll operations ends. */
  onScroll?: (scrollTop: number) => void;
  /** This callback is called when the table needs to fetch more items. */
  onFetch?: (offset: number, count: number) => void;
  /** This callback is called when an item is clicked. */
  onClick?: (item:any) => void;
  /** This callback is called when the table sets a new order. */
  onOrder?: (order: string, dir?: TDir) => void;
  /** Element to show when there is no data. The DataTable has a default "no data" message. */
  nodata?: React.ReactNode;
  /** Currently loading? If true, an amination appears. */
  loading?: boolean;
  /** Show error state? This will offer a default error message and a "Retry" button. */
  error?: boolean;
  /** If set, this message replaces the default error message. */
  errorMessage?: React.ReactNode;
  /** if set, DataTable shows vertical grid lines. */
  grid?: boolean;
}

interface IDataTableState {
  // 1-based index of first row in viewport
  first: number,
  // 1-based index of last row in viewport
  last: number;
  // Is the records counter currently visible?
  showCounter: boolean;
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
      first: 0,
      last: 0,
      showCounter: true
    };
  }

  // After mounting find the first and last index of the items
  // currently scrolled to, then fetch the corresponding data.
  componentDidMount() {
    let scrollTop = this.props.scrollTop ? this.props.scrollTop : 0;
    let height = this.bodyElement.clientHeight;
    // If height is 0, then the table is invisible. Just fetch the first 25 rows.
    if(height == 0) height = ITEM_HEIGHT * 25;
    this.fetchData(scrollTop, height);
  }

  // If a scrollTop (in pixels) was given, then scroll the DataTable to that position.
  componentDidUpdate() {
    if(this.props.scrollTop) this.bodyElement.scrollTop = this.props.scrollTop;
  }

  fetchData = (scrollTop: number, height: number) => {
    // Find index of first (partially) visible row.
    let first = Math.floor(scrollTop / ITEM_HEIGHT);
    // Find index of last (partially) visible row.
    let last = Math.floor((scrollTop + height - 1) / ITEM_HEIGHT);
    // Are there any empty records in the range?
    let isEmpty = false;
    for(let i = first; i <= last; i++) {
      if(!this.props.data[i]) isEmpty = true;
    }
    // If there are empty spots, request the records for this segment.
    // In fact, fetch 20 records before and after as well, to minimize 
    // requests on small scrolls.
    if(isEmpty && this.props.onFetch) {
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
    // There is no end-scroll event. Instead, we use a timer to 
    // determine when scrolling really stops.
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
      let orderable = !!child.props.order && !!this.props.onOrder;
      // Is this column currently sorted?
      let ordered = child.props.order === this.props.order;
      return <Header align={child.props.align} force={child.props.force} weight={child.props.weight} orderable={orderable} ordered={ordered} dir={this.props.dir} defaultDir={child.props.dir} onClick={orderable ? () => this.props.onOrder(child.props.order, child.props.dir) : null}>{child.props.label}</Header>
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
      rows.push(<Row key={i} top={i * ITEM_HEIGHT} onClick={this.props.onClick ? () => this.handleClick(row) : null}>{
        React.Children.map(this.props.children, (child:DataColumn) => {
          // Is the column removed? This can happen for conditionally-rendered columns.
          if(!child) return null;
          return <Cell item={row} grid={this.props.grid} align={child.props.align} force={child.props.force} weight={child.props.weight}>{child.props.children}</Cell>
        })
      }</Row>);
    }
    return rows;
  }

  /* This method is used to determine the absolute position on the page of any element, 
   * taking containment relationships and page scrolling into account. */
  getPosition(el: HTMLElement) {
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
        var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
   
        xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
        yPosition += (el.offsetTop - yScrollPos + el.clientTop);
      } else {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent as HTMLElement;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }  

  /*
   * When the mouse moves over the table body, calculate its position relative
   * to the bottom of the list. If it's at least two rows above the end of the
   * list, show the counter. Otherwise hide the counter.
   */
  handleMouseMove = (e:React.MouseEvent) => {
    let bodyY = this.getPosition(this.bodyElement).y;
    let limit = bodyY + this.bodyElement.clientHeight + this.bodyElement.scrollTop - ITEM_HEIGHT * 2;
    if(e.clientY >= limit && this.state.showCounter) {
      this.setState({showCounter: false});
    }
    if(e.clientY < limit && !this.state.showCounter) { 
      this.setState({showCounter: true});
    }
  }

  /*
   * When the mouse leaves the table, show the counter if it's not 
   * currently visible.
   */
  handleMouseLeave = () => {
    if(!this.state.showCounter) {
      this.setState({ showCounter: true });
    }
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
            <Body ref={(el:any) => this.bodyElement = el} onScroll={this.handleScroll} onMouseMove={(e: React.MouseEvent) => { this.handleMouseMove(e); }} onMouseLeave={this.handleMouseLeave}>
              {p.error && 
                <div style={{padding: '25px'}}>
                  <Message type="error">
                    <Message.Header>Error</Message.Header>
                    {p.errorMessage && p.errorMessage}
                    {!p.errorMessage && "An error occurred loading data."}
                    {p.onFetch && 
                    <div style={{ textAlign: 'right' }}>
                      <Button onClick={this.handleRetry}>Retry</Button>
                    </div>}
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
            <CSSTransition in={p.data.length > 0 && this.state.showCounter} timeout={500} unmountOnExit classNames="fade">
              <Counter count={p.data.length} first={this.state.first} last={this.state.last}/>
            </CSSTransition>
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

/**
 * @example
 * <DataTable 
 *   error={false} loading={false} scrollTop={0}
 *   onScroll={(scrollTop: number) => {}} 
 *   data={[
 *     { name: "John",   age: 24, sport: "Soccer"},
 *     { name: "Mary",   age: 18, sport: "Polo"},
 *     { name: "Bert",   age: 21, sport: "Basketball"}
 *   ]} 
 *   onFetch={(offset: number, count: number) => {}} 
 *   onOrder={(order: string, dir?: TDir) => {}} 
 *   order="name" dir="asc">
 *
 *   <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item:IItem) => item.name}</DataTable.Column>
 *   <DataTable.Column weight={1} label="Age" order="age" dir="asc">{(item:IItem) => item.age}</DataTable.Column>
 *   <DataTable.Column weight={1} label="Sport" order="sport" dir="asc">{(item:IItem) => item.sport}</DataTable.Column>
 *
 * </DataTable>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-datatable--properties
 */
class DataTable extends React.Component<IDataTableProps, {}> {
  public static displayName = 'DataTable';

  /**
   * A single column in a DataTable. Its child element must be a function that takes an item 
   * provided to it by the parent DataTable.
   * 
   * @example 
   * <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item: MyItem) => item.name}</DataTable.Column>
   */
  public static Column = DataColumn;

  render() {
    return (
      <DataTableStyled {...this.props}></DataTableStyled>
    );
  }
}

(DataTable.Column as any).displayName = "DataTable.Column";

export { DataTable };
