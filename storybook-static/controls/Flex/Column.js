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
var ColumnBase = /** @class */ (function (_super) {
    __extends(ColumnBase, _super);
    function ColumnBase(props) {
        return _super.call(this, props) || this;
    }
    ColumnBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return ColumnBase;
}(React.Component));
var ColumnStyled = styled(ColumnBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  padding: 0 ", "em;\n  &:first-child { padding-left: 0; }\n  &:last-child { padding-right: 0; }  \n  ", "\n"], ["\n  ", "\n  padding: 0 ", "em;\n  &:first-child { padding-left: 0; }\n  &:last-child { padding-right: 0; }  \n  ", "\n"])), function (p) { return p.width && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["flex: ", ";"], ["flex: ", ";"])), p.width); }, function (p) { return p.gutter * p.theme.gutter; }, function (p) { return p.stackable && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    @media (max-width: ", "px) {\n      padding: ", "em 0;\n      &:first-child { padding-top: 0; }\n      &:last-child { padding-bottom: 0; }        \n    }\n  "], ["\n    @media (max-width: ", "px) {\n      padding: ", "em 0;\n      &:first-child { padding-top: 0; }\n      &:last-child { padding-bottom: 0; }        \n    }\n  "])), function (p) { return p.theme.smallScreen; }, p.gutter * p.theme.gutter); });
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        var p = this.props;
        return (React.createElement(ColumnStyled, __assign({}, p)));
    };
    return Column;
}(React.Component));
export { Column };
var templateObject_1, templateObject_2, templateObject_3;
