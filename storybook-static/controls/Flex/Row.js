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
var RowBase = /** @class */ (function (_super) {
    __extends(RowBase, _super);
    function RowBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, React.Children.map(p.children, function (child) {
            return child ? React.cloneElement(child, { stackable: p.stackable, gutter: p.gutter }) : null;
        })));
    };
    return RowBase;
}(React.Component));
var RowStyled = styled(RowBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  padding: ", "em 0;\n  &:first-of-type { padding-top: 0; }\n  &:last-of-type { padding-bottom: 0; }    \n  ", "\n  ", "\n"], ["\n  display: flex;\n  flex-direction: row;\n  padding: ", "em 0;\n  &:first-of-type { padding-top: 0; }\n  &:last-of-type { padding-bottom: 0; }    \n  ", "\n  ", "\n"])), function (p) { return p.compact ? 0 : (p.gutter * p.theme.gutter); }, function (p) { return p.stackable && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @media (max-width: ", "px) {\n      flex-direction: column;\n    }  \n  "], ["\n    @media (max-width: ", "px) {\n      flex-direction: column;\n    }  \n  "])), function (p) { return p.theme.smallScreen; }); }, function (p) { return p.divided && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    &:not(:last-of-type) {\n      border-bottom: solid 1px ", ";\n    }\n  "], ["\n    &:not(:last-of-type) {\n      border-bottom: solid 1px ", ";\n    }\n  "])), function (p) { return p.theme.normalColor; }); });
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var p = this.props;
        return (React.createElement(RowStyled, __assign({}, p)));
    };
    return Row;
}(React.Component));
export { Row };
var templateObject_1, templateObject_2, templateObject_3;
