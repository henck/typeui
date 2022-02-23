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
var ButtonOrBase = /** @class */ (function (_super) {
    __extends(ButtonOrBase, _super);
    function ButtonOrBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className }); };
        return _this;
    }
    return ButtonOrBase;
}(React.Component));
var ButtonOrStyled = styled(ButtonOrBase)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display:  inline-block;\n  position: relative;\n  width:    0px;\n  margin:   0 2px 0 2px;\n  z-index:  1;              /* Otherwise next button overlays this. */\n  &:before {\n    content:       'or';\n    position:      absolute;\n    top:           -1em;\n    left:          -1em;\n    width:         2em;\n    height:        2em;\n    line-height:   2em;\n    text-align:    center;\n    background:    #ffffff;\n    border-radius: 1em;\n    color:         #888;\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";  \n"], ["\n  display:  inline-block;\n  position: relative;\n  width:    0px;\n  margin:   0 2px 0 2px;\n  z-index:  1;              /* Otherwise next button overlays this. */\n  &:before {\n    content:       'or';\n    position:      absolute;\n    top:           -1em;\n    left:          -1em;\n    width:         2em;\n    height:        2em;\n    line-height:   2em;\n    text-align:    center;\n    background:    #ffffff;\n    border-radius: 1em;\n    color:         #888;\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";  \n"])), function (p) { return p.size === 'mini' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["font-size: .79em"], ["font-size: .79em"]))); }, function (p) { return p.size === 'tiny' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["font-size: .86em"], ["font-size: .86em"]))); }, function (p) { return p.size === 'small' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["font-size: .93em"], ["font-size: .93em"]))); }, function (p) { return p.size === 'large' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["font-size: 1.14em"], ["font-size: 1.14em"]))); }, function (p) { return p.size === 'big' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["font-size: 1.29em"], ["font-size: 1.29em"]))); }, function (p) { return p.size === 'huge' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["font-size: 1.43em"], ["font-size: 1.43em"]))); }, function (p) { return p.size === 'massive' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["font-size: 1.71em"], ["font-size: 1.71em"]))); });
var ButtonOr = /** @class */ (function (_super) {
    __extends(ButtonOr, _super);
    function ButtonOr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(ButtonOrStyled, __assign({}, _this.props)); };
        return _this;
    }
    return ButtonOr;
}(React.Component));
export { ButtonOr };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
