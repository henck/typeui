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
// Helpers
import { lighten } from '../../helper/lighten';
import { scaleSize } from '../../helper/SizeHelper';
var IconBase = /** @class */ (function (_super) {
    __extends(IconBase, _super);
    function IconBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("svg", { className: p.className, onClick: p.onClick, focusable: "false" },
            p.title && React.createElement("title", null, p.title),
            p.name && React.createElement("use", { xlinkHref: "spritemap.svg#" + p.name }),
            p.url && React.createElement("use", { xlinkHref: p.url })));
    };
    return IconBase;
}(React.Component));
export { IconBase };
var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n"], ["\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n"])));
var IconStyled = styled(IconBase).attrs(function (p) { return ({
    hasBorder: (p.circular || p.bordered || p.cornered),
    hasBackground: (p.circular || p.bordered || p.cornered) && p.inverted,
    emSize: scaleSize(p.size ? p.size : 'medium', 1, p.theme.scale.icon)
}); })(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  shape-rendering: geometricPrecision;\n  \n  /* Spacing around icon. */\n  ", "\n\n  /* Clickable icons have a hover animation. */\n  ", "\n\n  /* Floating */\n  ", "\n  ", "  \n\n  /* Disabled */\n  ", "\n\n  /* Sizes. We use the precalculated 'em' size values. */  \n  width: ", "em;  \n  height: ", "em;\n  /* Don't be squished when in a flex: */\n  min-width: ", "em;  \n  min-height: ", "em;\n\n  /* Transformations */\n  ", "\n  ", "\n  ", "\n\n  /* Border radius, for circular and cornered: */\n  ", "\n  ", "\n\n  /* Icon colors */\n  ", "\n  ", "\n\n  /* Loading */\n  ", "\n"], ["\n  shape-rendering: geometricPrecision;\n  \n  /* Spacing around icon. */\n  ", "\n\n  /* Clickable icons have a hover animation. */\n  ", "\n\n  /* Floating */\n  ", "\n  ", "  \n\n  /* Disabled */\n  ", "\n\n  /* Sizes. We use the precalculated 'em' size values. */  \n  width: ", "em;  \n  height: ", "em;\n  /* Don't be squished when in a flex: */\n  min-width: ", "em;  \n  min-height: ", "em;\n\n  /* Transformations */\n  ", "\n  ", "\n  ", "\n\n  /* Border radius, for circular and cornered: */\n  ", "\n  ", "\n\n  /* Icon colors */\n  ", "\n  ", "\n\n  /* Loading */\n  ", "\n"])), function (p) { return p.padded && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["margin: 2px;"], ["margin: 2px;"]))); }, function (p) { return p.onClick && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["cursor: pointer;"], ["cursor: pointer;"]))); }, function (p) { return p.float === 'left' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["float:left;"], ["float:left;"]))); }, function (p) { return p.float === 'right' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["float:right;"], ["float:right;"]))); }, function (p) { return p.disabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["opacity: 0.6;"], ["opacity: 0.6;"]))); }, function (p) { return p.emSize; }, function (p) { return p.emSize; }, function (p) { return p.emSize; }, function (p) { return p.emSize; }, function (p) { return p.flipped && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["transform: scaleY(-1);"], ["transform: scaleY(-1);"]))); }, function (p) { return p.mirrored && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["transform: scaleX(-1);"], ["transform: scaleX(-1);"]))); }, function (p) { return p.rotated && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["transform: rotate(", "deg);"], ["transform: rotate(", "deg);"])), p.rotated); }, function (p) { return p.circular && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["border-radius: 50%;"], ["border-radius: 50%;"]))); }, function (p) { return p.cornered && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["border-radius: ", "px;"], ["border-radius: ", "px;"])), p.theme.radius); }, function (p) { return !p.hasBackground && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    ", "\n    fill: ", ";\n    /* Note that the border thickness uses the pre-calculated 'em' size value, with the 'em' removed. */\n    ", "\n    ", "\n  "], ["\n    ", "\n    fill: ", ";\n    /* Note that the border thickness uses the pre-calculated 'em' size value, with the 'em' removed. */\n    ", "\n    ", "\n  "])), p.hasBorder && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["padding: 4px;"], ["padding: 4px;"]))), p.color ? p.color : p.theme.fontColor, p.hasBorder && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["border: solid ", "px ", ";"], ["border: solid ", "px ", ";"])), p.emSize, p.color ? p.color : p.theme.normalColor), p.onClick && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      transition: fill ", " ease, border-color ", " ease;\n      &:hover {\n        ", "\n        fill: ", ";\n      }\n    "], ["\n      transition: fill ", " ease, border-color ", " ease;\n      &:hover {\n        ", "\n        fill: ", ";\n      }\n    "])), p.theme.transition.duration, p.theme.transition.duration, p.hasBorder && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["border-color: ", ";"], ["border-color: ", ";"])), lighten(0.3, p.color ? p.color : p.theme.normalColor)), lighten(0.3, p.color ? p.color : p.theme.fontColor))); }, function (p) { return p.hasBackground && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    padding: 5px;\n    fill: #fff;\n    background: ", ";\n    ", "\n  "], ["\n    padding: 5px;\n    fill: #fff;\n    background: ", ";\n    ", "\n  "])), p.color ? p.color : p.theme.fontColor, p.onClick && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      transition: background-color ", " ease;\n      &:hover {\n        background: ", ";\n      }    \n    "], ["\n      transition: background-color ", " ease;\n      &:hover {\n        background: ", ";\n      }    \n    "])), p.theme.transition.duration, lighten(0.5, p.color ? p.color : p.theme.fontColor))); }, function (p) { return p.loading && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    animation: ", " 2s linear infinite;\n  "], ["\n    animation: ", " 2s linear infinite;\n  "])), rotate); });
/**
 * Displays an icon.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-icon--properties
 */
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(IconStyled, __assign({}, _this.props)); };
        return _this;
    }
    /* This is used by parent components to determine if a child is an Icon. */
    Icon.defaultProps = {
        isIcon: true
    };
    return Icon;
}(React.Component));
export { Icon, IconStyled };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;
