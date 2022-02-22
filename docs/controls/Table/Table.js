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
import { css } from 'styled-components';
import styled from '../../styles/Theme';
var TableBase = /** @class */ (function (_super) {
    __extends(TableBase, _super);
    function TableBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("table", { className: p.className }, p.children));
    };
    return TableBase;
}(React.Component));
var TableStyled = styled(TableBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: separate;\n  table-layout: fixed; /* Required for overflow-hidden to work in <td> */\n\n  th, td {\n    padding: 6px 8px 6px 8px;\n    text-align: left;\n  }  \n\n  th {\n    font-weight: 500;\n    font-size: 12px;\n    background: #f7f7f7;\n  }\n\n  /* Border */\n  ", "\n\n  ", "\n"], ["\n  width: 100%;\n  border-collapse: separate;\n  table-layout: fixed; /* Required for overflow-hidden to work in <td> */\n\n  th, td {\n    padding: 6px 8px 6px 8px;\n    text-align: left;\n  }  \n\n  th {\n    font-weight: 500;\n    font-size: 12px;\n    background: #f7f7f7;\n  }\n\n  /* Border */\n  ", "\n\n  ", "\n"
    /**
     * A Table adds some standard styling to Table elements. Ordinary th and td elements are used
     * inside. You must use thead and tbody for the styling to work correctly.
     *
     * @example
     * <Table>
     *   <thead>...</thead>
     *   <tbody>...</tbody>
     * </Table>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-table--properties
     */
])), function (p) { return !p.transparent && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-bottom-left-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n    box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n\n    th {\n      border-top: solid 1px ", ";  \n      border-bottom: solid 1px ", ";    \n      &:first-child {\n        border-top-left-radius: ", "px;\n        border-left: solid 1px ", ";\n      }\n      &:last-child {\n        border-top-right-radius: ", "px;\n        border-right: solid 1px ", ";\n      }      \n    }\n\n    /* Leftmost <td>'s have a left border */\n    td:first-child {\n      border-left: solid 1px ", ";\n    }\n\n    /* Rightmost <td>'s have a right border */\n    td:last-child {\n      border-right: solid 1px ", ";\n    }  \n\n    /* If there is no <thead>, then the first row has a border and rounded corners: */\n    tbody:not(:nth-child(2)) tr:first-child {\n      td {\n        border-top: solid 1px ", ";\n      }\n      td:first-child {\n        border-top-left-radius: ", "px;\n      }\n      td:last-child {\n        border-top-right-radius: ", "px;\n      }\n    }\n\n    /* Add border and rounding to last row */\n    tr:last-child {\n      td {\n        border-bottom: solid 1px ", ";\n      }\n      td:first-child {\n        border-bottom-left-radius: ", "px;\n      }\n      td:last-child {\n        border-bottom-right-radius: ", "px;\n      }\n    }\n  "], ["\n    border-bottom-left-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n    box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n\n    th {\n      border-top: solid 1px ", ";  \n      border-bottom: solid 1px ", ";    \n      &:first-child {\n        border-top-left-radius: ", "px;\n        border-left: solid 1px ", ";\n      }\n      &:last-child {\n        border-top-right-radius: ", "px;\n        border-right: solid 1px ", ";\n      }      \n    }\n\n    /* Leftmost <td>'s have a left border */\n    td:first-child {\n      border-left: solid 1px ", ";\n    }\n\n    /* Rightmost <td>'s have a right border */\n    td:last-child {\n      border-right: solid 1px ", ";\n    }  \n\n    /* If there is no <thead>, then the first row has a border and rounded corners: */\n    tbody:not(:nth-child(2)) tr:first-child {\n      td {\n        border-top: solid 1px ", ";\n      }\n      td:first-child {\n        border-top-left-radius: ", "px;\n      }\n      td:last-child {\n        border-top-right-radius: ", "px;\n      }\n    }\n\n    /* Add border and rounding to last row */\n    tr:last-child {\n      td {\n        border-bottom: solid 1px ", ";\n      }\n      td:first-child {\n        border-bottom-left-radius: ", "px;\n      }\n      td:last-child {\n        border-bottom-right-radius: ", "px;\n      }\n    }\n  "])), function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }); }, function (p) { return p.striped && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    tr:nth-child(2n) td {\n      background-color: #f7f7f7;\n    }\n  "], ["\n    tr:nth-child(2n) td {\n      background-color: #f7f7f7;\n    }\n  "]))); });
/**
 * A Table adds some standard styling to Table elements. Ordinary th and td elements are used
 * inside. You must use thead and tbody for the styling to work correctly.
 *
 * @example
 * <Table>
 *   <thead>...</thead>
 *   <tbody>...</tbody>
 * </Table>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-table--properties
 */
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        return (React.createElement(TableStyled, __assign({}, this.props)));
    };
    return Table;
}(React.PureComponent));
export { Table };
var templateObject_1, templateObject_2, templateObject_3;
