var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ITEM_HEIGHT = 57;
var DataTableBase = /** @class */ (function (_super) {
    __extends(DataTableBase, _super);
    function DataTableBase(props) {
        var _this = _super.call(this, props) || this;
        // Last fetch operation is stored here so we can repeat it if there was an error.
        _this.fetch = null;
        _this.fetchData = function (scrollTop, height) {
            // Find index of first (partially) visible row.
            var first = Math.floor(scrollTop / ITEM_HEIGHT);
            // Find index of last (partially) visible row.
            var last = Math.floor((scrollTop + height - 1) / ITEM_HEIGHT);
            // Are there any empty records in the range?
            var isEmpty = false;
            for (var i = first; i <= last; i++) {
                if (!_this.props.data[i])
                    isEmpty = true;
            }
            // If there are empty spots, request the records for this segment.
            // In fact, fetch 20 records before and after as well, to minimize 
            // requests on small scrolls.
            if (isEmpty && _this.props.onFetch) {
                var firstToFetch = Math.max(0, first - 20);
                var lastToFetch = last + 20;
                _this.fetch = _this.props.onFetch.bind(_this, firstToFetch, lastToFetch - firstToFetch + 1);
                _this.fetch();
            }
            // Save position to state. It's used to display currently viewed record range.
            _this.setState({
                first: first + 1,
                last: last + 1
            });
        };
        _this.handleScroll = function () {
            // There is no end-scroll event. Instead, we use a timer to 
            // determine when scrolling really stops.
            window.clearTimeout(_this.isScrolling);
            _this.isScrolling = window.setTimeout(function () {
                _this.handleEndScroll();
            }, 66);
        };
        // When scrolling ends, we see which rows are currently visible.
        // If any of those rows are empty, we fetch the records for all
        // visible rows.
        _this.handleEndScroll = function () {
            if (_this.props.onScroll)
                _this.props.onScroll(_this.bodyElement.scrollTop);
            _this.fetchData(_this.bodyElement.scrollTop, _this.bodyElement.clientHeight);
        };
        _this.handleRetry = function () {
            if (_this.fetch)
                _this.fetch();
        };
        /*
         * When the mouse moves over the table body, calculate its position relative
         * to the bottom of the list. If it's at least two rows above the end of the
         * list, show the counter. Otherwise hide the counter.
         */
        _this.handleMouseMove = function (e) {
            var bodyY = _this.getPosition(_this.bodyElement).y;
            var limit = bodyY + _this.bodyElement.clientHeight + _this.bodyElement.scrollTop - ITEM_HEIGHT * 2;
            if (e.clientY >= limit && _this.state.showCounter) {
                _this.setState({ showCounter: false });
            }
            if (e.clientY < limit && !_this.state.showCounter) {
                _this.setState({ showCounter: true });
            }
        };
        /*
         * When the mouse leaves the table, show the counter if it's not
         * currently visible.
         */
        _this.handleMouseLeave = function () {
            if (!_this.state.showCounter) {
                _this.setState({ showCounter: true });
            }
        };
        _this.state = {
            first: 0,
            last: 0,
            showCounter: true
        };
        return _this;
    }
    // After mounting find the first and last index of the items
    // currently scrolled to, then fetch the corresponding data.
    DataTableBase.prototype.componentDidMount = function () {
        var scrollTop = this.props.scrollTop ? this.props.scrollTop : 0;
        var height = this.bodyElement.clientHeight;
        // If height is 0, then the table is invisible. Just fetch the first 25 rows.
        if (height == 0)
            height = ITEM_HEIGHT * 25;
        this.fetchData(scrollTop, height);
    };
    // If a scrollTop (in pixels) was given, then scroll the DataTable to that position.
    DataTableBase.prototype.componentDidUpdate = function () {
        if (this.props.scrollTop)
            this.bodyElement.scrollTop = this.props.scrollTop;
    };
    DataTableBase.prototype.handleClick = function (item) {
        var _this = this;
        if (this.props.onClick) {
            // Short delay so ripple effect is seen.
            window.setTimeout(function () { return _this.props.onClick(item); }, 300);
        }
    };
    DataTableBase.prototype.getHeaders = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child) {
            // Is the column removed? This can happen for conditionally-rendered columns.
            if (!child)
                return null;
            // Is this column orderable? 
            var orderable = !!child.props.order && !!_this.props.onOrder;
            // Is this column currently sorted?
            var ordered = child.props.order === _this.props.order;
            return React.createElement(Header, { grid: _this.props.grid, align: child.props.align, force: child.props.force, weight: child.props.weight, orderable: orderable, ordered: ordered, dir: _this.props.dir, defaultDir: child.props.dir, onClick: orderable ? function () { return _this.props.onOrder(child.props.order, child.props.dir); } : null }, child.props.label);
        });
    };
    DataTableBase.prototype.getData = function () {
        var _this = this;
        if (this.state.first == 0)
            return null;
        // Render about 20 items before and after the visible ones, to that small scrolls
        // do not leave whitespace before rerendering.
        var start = Math.max(this.state.first - 20, 0);
        var end = Math.min(this.state.last + 20, this.props.data.length - 1);
        // Render rows:
        var rows = [];
        var _loop_1 = function (i) {
            var row = this_1.props.data[i];
            // Do not render empty rows:
            if (!row)
                return "continue";
            // Render row:
            rows.push(React.createElement(Row, { key: i, top: i * ITEM_HEIGHT, onClick: this_1.props.onClick ? function () { return _this.handleClick(row); } : null }, React.Children.map(this_1.props.children, function (child) {
                // Is the column removed? This can happen for conditionally-rendered columns.
                if (!child)
                    return null;
                return React.createElement(Cell, { item: row, grid: _this.props.grid, align: child.props.align, force: child.props.force, weight: child.props.weight }, child.props.children);
            })));
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1(i);
        }
        return rows;
    };
    /* This method is used to determine the absolute position on the page of any element,
     * taking containment relationships and page scrolling into account. */
    DataTableBase.prototype.getPosition = function (el) {
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
    };
    DataTableBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement(Table, null,
                React.createElement(TableInner, null,
                    React.createElement(Head, { loading: p.loading }, this.getHeaders()),
                    React.createElement(Body, { ref: function (el) { return _this.bodyElement = el; }, onScroll: this.handleScroll, onMouseMove: function (e) { _this.handleMouseMove(e); }, onMouseLeave: this.handleMouseLeave },
                        p.error &&
                            React.createElement("div", { style: { padding: '25px' } },
                                React.createElement(Message, { type: "error" },
                                    React.createElement(Message.Header, null, "Error"),
                                    p.errorMessage && p.errorMessage,
                                    !p.errorMessage && "An error occurred loading data.",
                                    p.onFetch &&
                                        React.createElement("div", { style: { textAlign: 'right' } },
                                            React.createElement(Button, { onClick: this.handleRetry }, "Retry")))),
                        !p.error && React.createElement(React.Fragment, null,
                            React.createElement(Slider, { heightInItems: p.data.length }, this.getData()),
                            p.data.length == 0 && !p.loading &&
                                React.createElement("div", { style: { padding: '25px' } },
                                    React.createElement(Message, { type: "warning" },
                                        React.createElement(Message.Header, null, "No data"),
                                        p.nodata && p.nodata,
                                        !p.nodata && "Either no data is available, or perhaps your filters are too restrictive.")))),
                    React.createElement(CSSTransition, { in: p.data.length > 0 && this.state.showCounter, timeout: 500, unmountOnExit: true, classNames: "fade" },
                        React.createElement(Counter, { count: p.data.length, first: this.state.first, last: this.state.last }))))));
    };
    return DataTableBase;
}(React.Component));
// A DataTable takes up all vertical space available to it.
// Head and Body are flex-positioned vertically.
var DataTableStyled = styled(DataTableBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"])));
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
var DataTable = /** @class */ (function (_super) {
    __extends(DataTable, _super);
    function DataTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataTable.prototype.render = function () {
        return (React.createElement(DataTableStyled, __assign({}, this.props)));
    };
    DataTable.displayName = 'DataTable';
    /**
     * A single column in a DataTable. Its child element must be a function that takes an item
     * provided to it by the parent DataTable.
     *
     * @example
     * <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item: MyItem) => item.name}</DataTable.Column>
     */
    DataTable.Column = DataColumn;
    return DataTable;
}(React.Component));
DataTable.Column.displayName = "DataTable.Column";
export { DataTable };
var templateObject_1;
