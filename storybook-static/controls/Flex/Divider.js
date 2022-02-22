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
/**
 * A Flex.Divider creates a vertical dividing line inside a two-cell Flex.
 * If the Flex is stackable, then the Flex.Divider becomes horizontal when
 * the cells stack.
 */
var DividerBase = /** @class */ (function (_super) {
    __extends(DividerBase, _super);
    function DividerBase(props) {
        return _super.call(this, props) || this;
    }
    DividerBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("span", { className: p.className }, p.children));
    };
    return DividerBase;
}(React.Component));
var DividerStyled = styled(DividerBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position:       absolute;\n  top:            50%;\n  left:           50%;\n  width:          auto;\n  height:         50%;\n  z-index:        1;\n  transform:      translateX(-50%);\n  line-height:    0;\n  font-weight:    500;\n  text-transform: uppercase;  \n  text-align:     center;\n  &:before, &:after {\n    content:      '';\n    position:     absolute;\n    left:         50%;\n    width:        0;\n    height:       calc(100% - 1em);\n    border-left:  solid 1px ", ";\n  }\n  &:before { \n    bottom:       0;\n  }\n  &:after {\n    top:          -100%;\n  }\n  ", "  \n"], ["\n  position:       absolute;\n  top:            50%;\n  left:           50%;\n  width:          auto;\n  height:         50%;\n  z-index:        1;\n  transform:      translateX(-50%);\n  line-height:    0;\n  font-weight:    500;\n  text-transform: uppercase;  \n  text-align:     center;\n  &:before, &:after {\n    content:      '';\n    position:     absolute;\n    left:         50%;\n    width:        0;\n    height:       calc(100% - 1em);\n    border-left:  solid 1px ", ";\n  }\n  &:before { \n    bottom:       0;\n  }\n  &:after {\n    top:          -100%;\n  }\n  ", "  \n"])), function (p) { return p.theme.normalColor; }, function (p) { return p.stackable && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @media (max-width: ", "px) {\n      width:        100%;\n      height:       auto;\n      &:before, &:after {\n        left:       auto;\n        top:        50%;\n        width:      calc(50% - 2em);\n        height:     0;\n        border-top: solid 1px ", ";\n      }\n      &:before {\n        left:       0;\n      }\n      &:after {\n        right:      0;\n      }\n    }  \n  "], ["\n    @media (max-width: ", "px) {\n      width:        100%;\n      height:       auto;\n      &:before, &:after {\n        left:       auto;\n        top:        50%;\n        width:      calc(50% - 2em);\n        height:     0;\n        border-top: solid 1px ", ";\n      }\n      &:before {\n        left:       0;\n      }\n      &:after {\n        right:      0;\n      }\n    }  \n  "])), function (p) { return p.theme.smallScreen; }, function (p) { return p.theme.normalColor; }); });
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var p = this.props;
        return (React.createElement(DividerStyled, __assign({}, p)));
    };
    return Divider;
}(React.Component));
export { Divider };
var templateObject_1, templateObject_2;
