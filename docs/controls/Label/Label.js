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
// Helpers
import { darken } from '../../helper/darken';
import { lighten } from '../../helper/lighten';
import { scaleSize } from '../../helper/SizeHelper';
// Other controls
import { LabelGroup } from './LabelGroup';
import { LabelDetail } from './LabelDetail';
import { ImageStyled } from '../Image/Image';
import { IconStyled } from '../Icon/Icon';
var LabelBase = /** @class */ (function (_super) {
    __extends(LabelBase, _super);
    function LabelBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className, onClick: _this.props.onClick },
            _this.props.children,
            _this.props.content); };
        return _this;
    }
    return LabelBase;
}(React.Component));
var LabelStyled = styled(LabelBase).attrs(function (p) { return ({
    emSize: scaleSize(p.size, 0.86, p.theme.scale.label),
    finalColor: p.positive ? p.theme.positiveColor : (p.negative ? p.theme.negativeColor : p.color)
}); })(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  display:     inline-flex;\n  align-items: center;\n  box-sizing:  border-box;\n  line-height: 100%; /* of the font-size */\n  white-space: nowrap; /* text in label must not wrap into multiple lines. */\n  padding:     0.58em 0.83em; /* Padding scales with font size. */\n  vertical-align: middle;\n  border-radius: ", "px;\n  user-select: none;\n\n  /* Position */\n  ", "\n  ", "\n\n  /* Colors and border */\n  ", "\n  ", "\n  \n  /* Adjacent labels have a small margin. This does not apply to\n   * pointing labels. */\n  ", "\n  &:first-child { margin-left: 0; }\n  &:last-child { margin-right: 0; }\n\n  /* Size */  \n  font-size: ", "em;\n\n  /* Images in the label are resized vertically. */\n  ", " {\n    display: inline-block;\n    height: calc(1em + 2 * 0.58em);\n    min-height: 0;\n    margin: -0.58em 0.5em -0.58em -0.83em;\n    vertical-align: top; /* This way, we can use margin = minus parent padding */\n    img {\n      border-top-left-radius: ", "px;\n      border-bottom-left-radius: ", "px;\n      height: calc(1em + 2 * 0.58em);\n    }\n  }\n\n  /* Align icon (if present) with text. */\n  ", " {\n    display: inline-block;\n    vertical-align: top;\n    margin: 0 0.2em;\n  }\n\n  /* onClick hover: */\n  ", "\n\n  /* \n   * Pointing:\n   * \n   * Pointing is done by using a small square as :before. It's positioned\n   * where the arrow must be, then rotated and given borders on the \n   * appropriate sides.\n   */\n  ", "\n\n  /* Tag */\n  ", " \n\n  /* \n   * Attached\n   * \n   * A Label can be attached to other content (e.g. Input, Dropdown, Button). \n   * When it is attached, border-rounding and borders change.\n   */\n  ", "\n  ", "\n  ", "\n"], ["\n  display:     inline-flex;\n  align-items: center;\n  box-sizing:  border-box;\n  line-height: 100%; /* of the font-size */\n  white-space: nowrap; /* text in label must not wrap into multiple lines. */\n  padding:     0.58em 0.83em; /* Padding scales with font size. */\n  vertical-align: middle;\n  border-radius: ", "px;\n  user-select: none;\n\n  /* Position */\n  ", "\n  ", "\n\n  /* Colors and border */\n  ", "\n  ", "\n  \n  /* Adjacent labels have a small margin. This does not apply to\n   * pointing labels. */\n  ", "\n  &:first-child { margin-left: 0; }\n  &:last-child { margin-right: 0; }\n\n  /* Size */  \n  font-size: ", "em;\n\n  /* Images in the label are resized vertically. */\n  ", " {\n    display: inline-block;\n    height: calc(1em + 2 * 0.58em);\n    min-height: 0;\n    margin: -0.58em 0.5em -0.58em -0.83em;\n    vertical-align: top; /* This way, we can use margin = minus parent padding */\n    img {\n      border-top-left-radius: ", "px;\n      border-bottom-left-radius: ", "px;\n      height: calc(1em + 2 * 0.58em);\n    }\n  }\n\n  /* Align icon (if present) with text. */\n  ", " {\n    display: inline-block;\n    vertical-align: top;\n    margin: 0 0.2em;\n  }\n\n  /* onClick hover: */\n  ", "\n\n  /* \n   * Pointing:\n   * \n   * Pointing is done by using a small square as :before. It's positioned\n   * where the arrow must be, then rotated and given borders on the \n   * appropriate sides.\n   */\n  ", "\n\n  /* Tag */\n  ", " \n\n  /* \n   * Attached\n   * \n   * A Label can be attached to other content (e.g. Input, Dropdown, Button). \n   * When it is attached, border-rounding and borders change.\n   */\n  ", "\n  ", "\n  ", "\n"])), function (p) { return p.theme.radius; }, function (p) { return !p.floating && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["position: relative;"], ["position: relative;"]))); }, function (p) { return p.floating && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    right: 0;    \n    transform: translateX(40%) translateY(-70%);\n    z-index: 1;\n  "], ["\n    position: absolute;\n    top: 0;\n    right: 0;    \n    transform: translateX(40%) translateY(-70%);\n    z-index: 1;\n  "]))); }, function (p) { return p.basic && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border: solid 1px ", ";\n    /* Since border occupies 1px, reduce padding by 1px: */\n    padding: calc(-1px + 0.58em) calc(-1px + 0.83em);\n    color: ", "; \n    background: ", ";\n    font-weight: 500;\n  "], ["\n    border: solid 1px ", ";\n    /* Since border occupies 1px, reduce padding by 1px: */\n    padding: calc(-1px + 0.58em) calc(-1px + 0.83em);\n    color: ", "; \n    background: ", ";\n    font-weight: 500;\n  "])), p.finalColor ? p.finalColor : p.theme.normalColor, p.finalColor ? p.finalColor : lighten(0.4, p.theme.fontColor), p.theme.background); }, function (p) {
    var _a;
    return !p.basic && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color:       ", ";\n    background:  ", ";\n    font-weight: ", ";\n  "], ["\n    color:       ", ";\n    background:  ", ";\n    font-weight: ", ";\n  "])), p.finalColor ? "#fff" : lighten(0.3, p.theme.fontColor), (_a = p.finalColor) !== null && _a !== void 0 ? _a : p.theme.normalColor, p.finalColor ? "500" : "inherit");
}, function (p) { return !p.pointing && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["margin: 0 0.2em;"], ["margin: 0 0.2em;"]))); }, function (p) { return p.emSize; }, ImageStyled, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, IconStyled, function (p) {
    var _a;
    return p.onClick && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    cursor: pointer;\n    transition: background-color 0.2s ease, color 0.2s ease;\n    &:hover {\n      ", "\n      ", "      \n    }\n  "], ["\n    cursor: pointer;\n    transition: background-color 0.2s ease, color 0.2s ease;\n    &:hover {\n      ", "\n      ", "      \n    }\n  "])), p.basic && !p.finalColor && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        color: ", ";\n      "], ["\n        color: ", ";\n      "])), p.theme.primaryColor), !p.basic && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        background-color: ", ";\n        ", "\n      "], ["\n        background-color: ", ";\n        ", "\n      "])), darken(0.05, (_a = p.finalColor) !== null && _a !== void 0 ? _a : p.theme.normalColor), !p.finalColor && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["color:", ";"], ["color:", ";"])), p.theme.fontColor)));
}, function (p) { return !p.tag && css(templateObject_17 || (templateObject_17 = __makeTemplateObject([" /* No pointing on tags. */\n    ", "\n\n    /* Pointing left (either no pointing value provided or \"left\"): */\n    ", "\n\n    /* Pointing right: */\n    ", "\n\n    /* Pointing top: */\n    ", "\n\n    /* Pointing bottom: */\n    ", "  \n  "], [" /* No pointing on tags. */\n    ", "\n\n    /* Pointing left (either no pointing value provided or \"left\"): */\n    ", "\n\n    /* Pointing right: */\n    ", "\n\n    /* Pointing top: */\n    ", "\n\n    /* Pointing bottom: */\n    ", "  \n  "])), p.pointing && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      &:before {\n        content: '';\n        position: absolute;\n        width: 0.6em;\n        height: 0.6em;\n        border-style: inherit;\n        border-color: inherit;\n        background: inherit;\n        transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      }\n    "], ["\n      &:before {\n        content: '';\n        position: absolute;\n        width: 0.6em;\n        height: 0.6em;\n        border-style: inherit;\n        border-color: inherit;\n        background: inherit;\n        transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      }\n    "]))), p.pointing && (typeof p.pointing === "boolean" || p.pointing === "left") && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      margin-left: 1em;\n      &:before {\n        left: ", "; /* Shift for basic border */\n        top: 50%;\n        border-width: 0 0 1px 1px;\n      }\n    "], ["\n      margin-left: 1em;\n      &:before {\n        left: ", "; /* Shift for basic border */\n        top: 50%;\n        border-width: 0 0 1px 1px;\n      }\n    "])), p.basic ? '-1px' : '0'), p.pointing && p.pointing === "right" && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      margin-right: 1em;\n      &:before {\n        left: 100%;\n        ", " /* Shift for basic border */\n        top: 50%;\n        border-width: 1px 1px 0 0;\n      }\n    "], ["\n      margin-right: 1em;\n      &:before {\n        left: 100%;\n        ", " /* Shift for basic border */\n        top: 50%;\n        border-width: 1px 1px 0 0;\n      }\n    "])), p.basic && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["margin-left: 1px;"], ["margin-left: 1px;"])))), p.pointing && p.pointing === "top" && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      margin-top: 1em;\n      &:before {\n        left: 50%;\n        top: ", "; /* Shift for basic border */\n        border-width: 1px 0 0 1px;\n      }\n    "], ["\n      margin-top: 1em;\n      &:before {\n        left: 50%;\n        top: ", "; /* Shift for basic border */\n        border-width: 1px 0 0 1px;\n      }\n    "])), p.basic ? '-1px' : '0'), p.pointing && p.pointing === "bottom" && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      margin-bottom: 1em;\n      &:before {\n        left: 50%;\n        ", " /* Shift for basic border */\n        top: 100%;\n        border-width: 0 1px 1px 0;\n      }\n    "], ["\n      margin-bottom: 1em;\n      &:before {\n        left: 50%;\n        ", " /* Shift for basic border */\n        top: 100%;\n        border-width: 0 1px 1px 0;\n      }\n    "])), p.basic && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["margin-top: 1px;"], ["margin-top: 1px;"]))))); }, function (p) { return p.tag && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 1.07em; /* 0.2em space between labels, plus half label height */\n    &:first-child { margin-left: 1.05em; } /* Override original value */\n    padding-left: 1.9em;\n    padding-right: 1.4em;\n    /* Arrow part */\n    &:before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 0;\n      background-color: inherit;\n      width: 1.5274em; /* Label height * sqrt(2) */\n      height: 1.5274em;\n      transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      border-width: inherit;\n      border-style: inherit;\n      border-color: inherit;\n      ", "\n    }\n    /* Hole part */\n    &:after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: -.25em;\n      background: #fff;\n      width: .5em;\n      height: .5em;\n      ", "\n      transform: translateY(-50%);\n      border-radius: 1em;\n      ", "\n    }\n\n    /* Inside a tag, images are no longer rounded. */\n    ", " {\n      img {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    }\n  "], ["\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 1.07em; /* 0.2em space between labels, plus half label height */\n    &:first-child { margin-left: 1.05em; } /* Override original value */\n    padding-left: 1.9em;\n    padding-right: 1.4em;\n    /* Arrow part */\n    &:before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 0;\n      background-color: inherit;\n      width: 1.5274em; /* Label height * sqrt(2) */\n      height: 1.5274em;\n      transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      border-width: inherit;\n      border-style: inherit;\n      border-color: inherit;\n      ", "\n    }\n    /* Hole part */\n    &:after {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: -.25em;\n      background: #fff;\n      width: .5em;\n      height: .5em;\n      ", "\n      transform: translateY(-50%);\n      border-radius: 1em;\n      ", "\n    }\n\n    /* Inside a tag, images are no longer rounded. */\n    ", " {\n      img {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    }\n  "])), p.basic && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["border-width: 0 0 1px 1px;"], ["border-width: 0 0 1px 1px;"]))), !p.basic && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["box-shadow: 0 -1px 1px 0 rgba(0,0,0,.3);"], ["box-shadow: 0 -1px 1px 0 rgba(0,0,0,.3);"]))), p.basic && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n        border: inherit;\n      "], ["\n        border: inherit;\n      "]))), ImageStyled); }, function (p) { return p.attached && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n    margin: 0;\n    &:not(:first-child) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:last-child) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  "], ["\n    margin: 0;\n    &:not(:first-child) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n    &:not(:last-child) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  "]))); }, function (p) { return p.attached && p.attached !== 'right' && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["border-right-width: 0;"], ["border-right-width: 0;"]))); }, function (p) { return p.attached && p.attached === 'right' && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["border-left-width: 0;"], ["border-left-width: 0;"]))); });
/**
 * Stylable label.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-label--properties
 */
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(LabelStyled, __assign({}, _this.props)); };
        return _this;
    }
    /* This is used by parent components to determine if a child is a Label. */
    Label.defaultProps = {
        isLabel: true
    };
    /**
     * A Label.Group can pass props to the labels it contains, but
     * children can still override them. Goups can pass along basic,
     * color, pointing, size and tag.
     */
    Label.Group = LabelGroup;
    /**
     * A label can contain a Label.Detail inside it.
     */
    Label.Detail = LabelDetail;
    return Label;
}(React.Component));
export { Label, LabelStyled };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25;
