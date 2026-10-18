import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
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
import { CSSTransition } from 'react-transition-group';
import { Row } from './Row';
const ITEM_HEIGHT = 57;
class DataTableBase extends React.Component {
    constructor(props) {
        super(props);
        // Last fetch operation is stored here so we can repeat it if there was an error.
        this.fetch = null;
        this.fetchData = (scrollTop, height) => {
            // Find index of first (partially) visible row.
            let first = Math.floor(scrollTop / ITEM_HEIGHT);
            // Find index of last (partially) visible row.
            let last = Math.floor((scrollTop + height - 1) / ITEM_HEIGHT);
            // Are there any empty records in the range?
            let isEmpty = false;
            for (let i = first; i <= last; i++) {
                if (!this.props.data[i])
                    isEmpty = true;
            }
            // If there are empty spots, request the records for this segment.
            // In fact, fetch 20 records before and after as well, to minimize 
            // requests on small scrolls.
            if (isEmpty && this.props.onFetch) {
                let firstToFetch = Math.max(0, first - 20);
                let lastToFetch = last + 20;
                this.fetch = this.props.onFetch.bind(this, firstToFetch, lastToFetch - firstToFetch + 1);
                this.fetch();
            }
            // Save position to state. It's used to display currently viewed record range.
            this.setState({
                first: first + 1,
                last: last + 1
            });
        };
        this.handleScroll = () => {
            // There is no end-scroll event. Instead, we use a timer to 
            // determine when scrolling really stops.
            window.clearTimeout(this.isScrolling);
            this.isScrolling = window.setTimeout(() => {
                this.handleEndScroll();
            }, 66);
        };
        // When scrolling ends, we see which rows are currently visible.
        // If any of those rows are empty, we fetch the records for all
        // visible rows.
        this.handleEndScroll = () => {
            if (this.props.onScroll)
                this.props.onScroll(this.bodyElement.scrollTop);
            this.fetchData(this.bodyElement.scrollTop, this.bodyElement.clientHeight);
        };
        this.counterRef = React.createRef();
        this.handleRetry = () => {
            if (this.fetch)
                this.fetch();
        };
        /*
         * When the mouse moves over the table body, calculate its position relative
         * to the bottom of the list. If it's at least two rows above the end of the
         * list, show the counter. Otherwise hide the counter.
         */
        this.handleMouseMove = (e) => {
            let bodyY = this.getPosition(this.bodyElement).y;
            let limit = bodyY + this.bodyElement.clientHeight + this.bodyElement.scrollTop - ITEM_HEIGHT * 2;
            if (e.clientY >= limit && this.state.showCounter) {
                this.setState({ showCounter: false });
            }
            if (e.clientY < limit && !this.state.showCounter) {
                this.setState({ showCounter: true });
            }
        };
        /*
         * When the mouse leaves the table, show the counter if it's not
         * currently visible.
         */
        this.handleMouseLeave = () => {
            if (!this.state.showCounter) {
                this.setState({ showCounter: true });
            }
        };
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
        if (height == 0)
            height = ITEM_HEIGHT * 25;
        this.fetchData(scrollTop, height);
    }
    // If a scrollTop (in pixels) was given, then scroll the DataTable to that position.
    componentDidUpdate() {
        if (this.props.scrollTop)
            this.bodyElement.scrollTop = this.props.scrollTop;
    }
    handleClick(item) {
        if (this.props.onClick) {
            // Short delay so ripple effect is seen.
            window.setTimeout(() => this.props.onClick(item), 300);
        }
    }
    getHeaders() {
        return React.Children.map(this.props.children, (child) => {
            // Is the column removed? This can happen for conditionally-rendered columns.
            if (!child)
                return null;
            // Is this column orderable? 
            let orderable = !!child.props.order && !!this.props.onOrder;
            // Is this column currently sorted?
            let ordered = child.props.order === this.props.order;
            return _jsx(Header, { grid: this.props.grid, align: child.props.align, force: child.props.force, weight: child.props.weight, orderable: orderable, ordered: ordered, dir: this.props.dir, defaultDir: child.props.dir, onClick: orderable ? () => this.props.onOrder(child.props.order, child.props.dir) : null, children: child.props.label });
        });
    }
    getData() {
        if (this.state.first == 0)
            return null;
        // Render about 20 items before and after the visible ones, to that small scrolls
        // do not leave whitespace before rerendering.
        let start = Math.max(this.state.first - 20, 0);
        let end = Math.min(this.state.last + 20, this.props.data.length - 1);
        // Render rows:
        let rows = [];
        for (let i = start; i <= end; i++) {
            let row = this.props.data[i];
            // Do not render empty rows:
            if (!row)
                continue;
            // Render row:
            rows.push(_jsx(Row, { top: i * ITEM_HEIGHT, onClick: this.props.onClick ? () => this.handleClick(row) : null, children: React.Children.map(this.props.children, (child) => {
                    // Is the column removed? This can happen for conditionally-rendered columns.
                    if (!child)
                        return null;
                    return _jsx(Cell, { item: row, grid: this.props.grid, align: child.props.align, force: child.props.force, weight: child.props.weight, onClick: child.props.onClick ? () => child.props.onClick(row) : null, onDoubleClick: child.props.onDoubleClick ? () => child.props.onDoubleClick(row) : null, children: child.props.children });
                }) }, i));
        }
        return rows;
    }
    /* This method is used to determine the absolute position on the page of any element,
     * taking containment relationships and page scrolling into account. */
    getPosition(el) {
        var xPosition = 0;
        var yPosition = 0;
        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
                var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
                xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
                yPosition += (el.offsetTop - yScrollPos + el.clientTop);
            }
            else {
                xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
            }
            el = el.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    }
    render() {
        let p = this.props;
        return (_jsx("div", { className: p.className, children: _jsx(Table, { children: _jsxs(TableInner, { children: [_jsx(Head, { loading: p.loading, children: this.getHeaders() }), _jsxs(Body, { ref: (el) => this.bodyElement = el, onScroll: this.handleScroll, onMouseMove: (e) => { this.handleMouseMove(e); }, onMouseLeave: this.handleMouseLeave, children: [p.error &&
                                    _jsx("div", { style: { padding: '25px' }, children: _jsxs(Message, { type: "error", children: [_jsx(Message.Header, { children: "Error" }), p.errorMessage && p.errorMessage, !p.errorMessage && "An error occurred loading data.", p.onFetch &&
                                                    _jsx("div", { style: { textAlign: 'right' }, children: _jsx(Button, { onClick: this.handleRetry, children: "Retry" }) })] }) }), !p.error && _jsxs(_Fragment, { children: [_jsx(Slider, { heightInItems: p.data.length, children: this.getData() }), p.data.length == 0 && !p.loading &&
                                            _jsx("div", { style: { padding: '25px' }, children: _jsxs(Message, { type: "warning", children: [_jsx(Message.Header, { children: "No data" }), p.nodata && p.nodata, !p.nodata && "Either no data is available, or perhaps your filters are too restrictive."] }) })] })] }), _jsx(CSSTransition, { nodeRef: this.counterRef, in: p.data.length > 0 && this.state.showCounter, timeout: 500, unmountOnExit: true, classNames: "fade", children: _jsx(Counter, { nodeRef: this.counterRef, count: p.data.length, first: this.state.first, last: this.state.last }) })] }) }) }));
    }
}
// A DataTable takes up all vertical space available to it.
// Head and Body are flex-positioned vertically.
const DataTableStyled = styled(DataTableBase) `
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
const DataTable = (props) => _jsx(DataTableStyled, { ...props });
/**
 * A single column in a DataTable. Its child element must be a function that takes an item
 * provided to it by the parent DataTable.
 *
 * @example
 * <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item: MyItem) => item.name}</DataTable.Column>
 */
DataTable.Column = DataColumn;
export { DataTable };
