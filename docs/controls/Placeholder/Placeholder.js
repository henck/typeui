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
import { keyframes, css } from 'styled-components';
// Other controls
import { PlaceholderParagraph } from './PlaceholderParagraph';
import { PlaceholderImage } from './PlaceholderImage';
import { PlaceholderHeader } from './PlaceholderHeader';
import { PlaceholderLine } from './PlaceholderLine';
var PlaceholderBase = /** @class */ (function (_super) {
    __extends(PlaceholderBase, _super);
    function PlaceholderBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaceholderBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            p.children,
            React.createElement("div", null)));
    };
    return PlaceholderBase;
}(React.Component));
// Background animation
var shimmer = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { transform: translateX(-50%); }\n  to   { transform: translateX(0); }\n"], ["\n  from { transform: translateX(-50%); }\n  to   { transform: translateX(0); }\n"])));
var PlaceholderStyled = styled(PlaceholderBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n\n  /* Fluid */\n  ", "\n\n  /* Background animation. \n     This is done using an underlying absolute positioned div, which is transformed, \n     rather than using background-position animation. This way, the animation is \n     smoother and GPU-accelerated. */\n  & > div:last-child {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: -150%;\n    bottom: 0;\n    z-index: -1;\n    background-color: #fff;\n    background-image: linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0, 0, 0, 0.08) 43%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 57%);\n    animation: ", " 1s linear infinite;                \n  }\n"], ["\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n\n  /* Fluid */\n  ", "\n\n  /* Background animation. \n     This is done using an underlying absolute positioned div, which is transformed, \n     rather than using background-position animation. This way, the animation is \n     smoother and GPU-accelerated. */\n  & > div:last-child {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: -150%;\n    bottom: 0;\n    z-index: -1;\n    background-color: #fff;\n    background-image: linear-gradient(to right, rgba(0,0,0,0.08) 0px, rgba(0, 0, 0, 0.08) 43%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.08) 57%);\n    animation: ", " 1s linear infinite;                \n  }\n"])), function (p) { return !p.fluid && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["max-width: 420px;"], ["max-width: 420px;"]))); }, shimmer);
//
// Placeholder is just a wrapper for styled-components PlaceholderStyled;
// it allows us to add static class members to the component class.
// 
/**
 * A Placeholder can contain a Placeholder.Header as well as Placeholder.Paragraph elements.
 * Any PlaceHolder.Line elements have random lengths by default, unless a length is specified.
 * The background animation is done using CSS transforms so that it can be smooth and
 * GPU-accelerated.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-placeholder--properties
 */
var Placeholder = /** @class */ (function (_super) {
    __extends(Placeholder, _super);
    function Placeholder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(PlaceholderStyled, __assign({}, _this.props)); };
        return _this;
    }
    Placeholder.Paragraph = PlaceholderParagraph;
    Placeholder.Image = PlaceholderImage;
    Placeholder.Header = PlaceholderHeader;
    Placeholder.Line = PlaceholderLine;
    return Placeholder;
}(React.Component));
export { Placeholder };
var templateObject_1, templateObject_2, templateObject_3;
