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
import { css } from 'styled-components';
import { Ripple } from '../Ripple';
var RowBase = /** @class */ (function (_super) {
    __extends(RowBase, _super);
    function RowBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowBase.prototype.render = function () {
        var p = this.props;
        return (
        // If row is clickable, wrap in a Ripple:
        p.onClick ?
            React.createElement(Ripple, { type: 'div', className: p.className, style: { top: p.top + 'px' }, onClick: p.onClick }, p.children)
            :
                React.createElement("div", { className: p.className, style: { top: p.top + 'px' }, onClick: p.onClick }, p.children));
    };
    return RowBase;
}(React.Component));
var RowStyled = styled(RowBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  width: 100%;\n  background-color: ", ";\n  &:not(:last-child) {\n    border-bottom: solid 1px ", ";\n  }\n  ", "\n"], ["\n  position: absolute;\n  display: flex;\n  width: 100%;\n  background-color: ", ";\n  &:not(:last-child) {\n    border-bottom: solid 1px ", ";\n  }\n  ", "\n"])), function (p) { return p.theme.background; }, function (p) { return p.theme.normalColor; }, function (p) { return p.onClick && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    transition: background-color ", "s ease;\n    &:hover {\n      background-color: #f9f9f9;\n    }\n  "], ["\n    cursor: pointer;\n    transition: background-color ", "s ease;\n    &:hover {\n      background-color: #f9f9f9;\n    }\n  "])), function (p) { return p.theme.transition.duration; }); });
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        return React.createElement(RowStyled, __assign({}, this.props));
    };
    return Row;
}(React.PureComponent));
export { Row };
var templateObject_1, templateObject_2;
