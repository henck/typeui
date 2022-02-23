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
var PlaceholderLineBase = /** @class */ (function (_super) {
    __extends(PlaceholderLineBase, _super);
    function PlaceholderLineBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className }); };
        return _this;
    }
    return PlaceholderLineBase;
}(React.Component));
/* Spacing between lines */
var LineSpacing = 12;
/* Height of a standard line */
var LineHeight = 7;
/* Extra height for tall line */
var TallExtra = 2;
var PlaceholderLineStyled = styled(PlaceholderLineBase).attrs(function (p) { return ({
    lineSpacing: LineSpacing,
    height: p.tall ? (LineHeight + TallExtra) : (LineHeight)
}); })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  /* The base line is white. It is the area above the see-through\n     line. It serves as a reference point for :before and\n     :after which draw the actual see-through line. */\n  position: relative;\n  background: #fff;\n\n  /* Spacing between lines\n     The white spacing block has zero height for the last line in\n     a collection of lines. */\n  height: 0px;\n  &:not(:last-child) {  height: ", "px; }\n\n  /* Line height */\n  margin-top: ", "px;\n\n  /* :after draws a white area over the line, in order \n     to shorten the see-through line to the desired length. */\n  &:after {\n    content: '';\n    position: absolute;\n    ", "\n    ", "\n    ", "\n    ", "\n    right: 0;\n    top: -", "px;\n    height: ", "px;\n    background: #fff;\n  }\n"], ["\n  /* The base line is white. It is the area above the see-through\n     line. It serves as a reference point for :before and\n     :after which draw the actual see-through line. */\n  position: relative;\n  background: #fff;\n\n  /* Spacing between lines\n     The white spacing block has zero height for the last line in\n     a collection of lines. */\n  height: 0px;\n  &:not(:last-child) {  height: ", "px; }\n\n  /* Line height */\n  margin-top: ", "px;\n\n  /* :after draws a white area over the line, in order \n     to shorten the see-through line to the desired length. */\n  &:after {\n    content: '';\n    position: absolute;\n    ", "\n    ", "\n    ", "\n    ", "\n    right: 0;\n    top: -", "px;\n    height: ", "px;\n    background: #fff;\n  }\n"])), function (p) { return p.lineSpacing; }, function (p) { return p.height; }, function (p) { return p.length === 'full' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["left: 100%;"], ["left: 100%;"]))); }, function (p) { return p.length === 'long' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["left: 75%;"], ["left: 75%;"]))); }, function (p) { return p.length === 'medium' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["left: 50%;"], ["left: 50%;"]))); }, function (p) { return p.length === 'short' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["left: 25%;"], ["left: 25%;"]))); }, function (p) { return p.height; }, function (p) { return p.height; });
//
// PlaceholderLine is a thin wrapper that defers all work to PlaceholderLineBase. 
// It does this so that it can set a default (random) value for the length prop
// if it wasn't specified.
//
var PlaceholderLine = /** @class */ (function (_super) {
    __extends(PlaceholderLine, _super);
    function PlaceholderLine(props) {
        var _this = _super.call(this, props) || this;
        _this.render = function () { return React.createElement(PlaceholderLineStyled, __assign({}, _this.props, { length: _this.length })); };
        // If length is not specified, then pick a random length for the line.
        var lengths = ['short', 'medium', 'long', 'full'];
        var randomLength = lengths[Math.floor(Math.random() * lengths.length)];
        _this.length = props.length || randomLength;
        return _this;
    }
    return PlaceholderLine;
}(React.Component));
export { PlaceholderLine };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
