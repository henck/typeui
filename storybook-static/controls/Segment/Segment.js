var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
// An :after clearfix isn't possible as Segment uses :before and :after
// for other purposes.
var ClearSegment = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject([" \n  clear: both;\n"], [" \n  clear: both;\n"])));
var SegmentBase = /** @class */ (function (_super) {
    __extends(SegmentBase, _super);
    function SegmentBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentBase.prototype.render = function () {
        var p = this.props;
        // Yes, this needs a double <div>:
        return (React.createElement("div", { className: p.className },
            React.createElement("div", null,
                p.children,
                React.createElement(ClearSegment, null))));
    };
    return SegmentBase;
}(React.PureComponent));
/**
 *  A Segment wraps an area of content.
 */
var SegmentStyled = styled(SegmentBase)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  /* Segment's div must be wrapped in a parent div, which must set\n   * a stacking context, in order for negative z-indices used\n   * by 'stacked' and 'piled' to work.\n   * http://www.independent-software.com/set-stacking-order-of-pseudo-elements-below-parent-element.html\n   */\n  position: relative;\n  /* z-index: 1; */ /* DISABLED! */\n\n  /* Margin:\n     Attached segments have no margin, except bottom-attached. */\n  ", "\n  \n  /* Floating */\n  ", "\n  ", "\n\n  /* Compact */\n  ", "\n\n  & > div {\n    position: relative;\n    background: ", ";\n    padding: 14px;\n\n    /* Shadow: only unattached segments have a dropshadow. */\n    ", "\n\n    /* Attachment and border: */\n    border-color: ", ";\n    border-style: solid;\n    border-left-width: 1px;\n    border-right-width: 1px;\n    /* Not attached: normal border. */\n    ", "\n    /* Middle attached: Only bottom border. */\n    ", "      \n    /* Top attached: Top and bottom border. */\n    ", "\n    /* Botom attached: Only bottom border. */\n    ", "\n\n    /* A raised Segment gets an extra deep shadow. */\n    ", "\n\n    /* Secondary, tertiary */\n    ", "\n    ", "\n    ", "\n\n    /* Padded */\n    ", "\n    ", "\n    ", "\n\n    /* Disabled */\n    ", "\n\n    /* Text alignment. */\n    ", "\n    ", "\n    ", "\n    \n    /* Define default styles for :before, :after so as not to repeat them. */\n    &:before, &:after {\n      position: absolute;\n      background: #fff;\n      border: solid 1px rgba(34, 36, 38, 0.15);\n      border-radius: ", "px;\n      box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n    }\n\n    /* \n     * A stacked segment has a single page beneath it. This is done using \n     * :before and z-index=-1. For negative z-indices to work, the parent\n     * element must not have a stacking index (no z-index).\n    */\n    ", "\n\n    /* \n     * A tall stacked segment has a two pages beneath it. This is done using \n     * :before, :after and z-index=-1. For negative z-indices to work, the \n     * parent element must not have a stacking index (no z-index).\n     */\n    ", "\n\n    /*\n     * A piled segment has two rotated pages behind it.\n     */\n    ", "\n  }\n"], ["\n  /* Segment's div must be wrapped in a parent div, which must set\n   * a stacking context, in order for negative z-indices used\n   * by 'stacked' and 'piled' to work.\n   * http://www.independent-software.com/set-stacking-order-of-pseudo-elements-below-parent-element.html\n   */\n  position: relative;\n  /* z-index: 1; */ /* DISABLED! */\n\n  /* Margin:\n     Attached segments have no margin, except bottom-attached. */\n  ", "\n  \n  /* Floating */\n  ", "\n  ", "\n\n  /* Compact */\n  ", "\n\n  & > div {\n    position: relative;\n    background: ", ";\n    padding: 14px;\n\n    /* Shadow: only unattached segments have a dropshadow. */\n    ", "\n\n    /* Attachment and border: */\n    border-color: ", ";\n    border-style: solid;\n    border-left-width: 1px;\n    border-right-width: 1px;\n    /* Not attached: normal border. */\n    ", "\n    /* Middle attached: Only bottom border. */\n    ", "      \n    /* Top attached: Top and bottom border. */\n    ", "\n    /* Botom attached: Only bottom border. */\n    ", "\n\n    /* A raised Segment gets an extra deep shadow. */\n    ", "\n\n    /* Secondary, tertiary */\n    ", "\n    ", "\n    ", "\n\n    /* Padded */\n    ", "\n    ", "\n    ", "\n\n    /* Disabled */\n    ", "\n\n    /* Text alignment. */\n    ", "\n    ", "\n    ", "\n    \n    /* Define default styles for :before, :after so as not to repeat them. */\n    &:before, &:after {\n      position: absolute;\n      background: #fff;\n      border: solid 1px rgba(34, 36, 38, 0.15);\n      border-radius: ", "px;\n      box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n    }\n\n    /* \n     * A stacked segment has a single page beneath it. This is done using \n     * :before and z-index=-1. For negative z-indices to work, the parent\n     * element must not have a stacking index (no z-index).\n    */\n    ", "\n\n    /* \n     * A tall stacked segment has a two pages beneath it. This is done using \n     * :before, :after and z-index=-1. For negative z-indices to work, the \n     * parent element must not have a stacking index (no z-index).\n     */\n    ", "\n\n    /*\n     * A piled segment has two rotated pages behind it.\n     */\n    ", "\n  }\n"
    /**
     * A Segment places a border around some content.
     *
     * @example
     * <Segment piled>Some content</Segment>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-segment--properties
     */
])), function (p) { return (!p.attached || p.attached == 'bottom') && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["margin-bottom: 1em;"], ["margin-bottom: 1em;"]))); }, function (p) { return p.float === 'left' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["float:left;"], ["float:left;"]))); }, function (p) { return p.float === 'right' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["float:right;"], ["float:right;"]))); }, function (p) { return p.compact && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["display:table;"], ["display:table;"]))); }, function (p) { return p.theme.background; }, function (p) { return !p.attached && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;"], ["box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;"]))); }, function (p) { return p.theme.normalColor; }, function (p) { return !p.attached && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-radius: ", "px;\n    "], ["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-radius: ", "px;\n    "])), function (p) { return p.theme.radius; }); }, function (p) { return p.attached && p.attached !== 'top' && p.attached !== 'bottom' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      border-bottom-width: 1px;\n      border-radius: none;\n    "], ["\n      border-bottom-width: 1px;\n      border-radius: none;\n    "]))); }, function (p) { return p.attached === 'top' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-top-left-radius: ", "px;\n      border-top-right-radius: ", "px;\n    "], ["\n      border-top-width: 1px;\n      border-bottom-width: 1px;\n      border-top-left-radius: ", "px;\n      border-top-right-radius: ", "px;\n    "])), p.theme.radius, p.theme.radius); }, function (p) { return p.attached === 'bottom' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      border-bottom-width: 1px;\n      border-bottom-left-radius: ", "px;\n      border-bottom-right-radius: ", "px;\n    "], ["\n      border-bottom-width: 1px;\n      border-bottom-left-radius: ", "px;\n      border-bottom-right-radius: ", "px;\n    "])), p.theme.radius, p.theme.radius); }, function (p) { return p.raised && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;"], ["box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;"]))); }, function (p) { return p.secondary && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      background: ", ";\n    "], ["\n      background: ", ";\n    "])), darken(0.1, '#fff')); }, function (p) { return p.tertiary && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      background: ", ";\n    "], ["\n      background: ", ";\n    "])), darken(0.2, '#fff')); }, function (p) { return p.color && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      background: ", ";\n    "], ["\n      background: ", ";\n    "])), p.color); }, function (p) { return p.padded && p.padded !== 'very' && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["padding: 21px;"], ["padding: 21px;"]))); }, function (p) { return p.padded && p.padded === 'very' && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["padding: 42px;"], ["padding: 42px;"]))); }, function (p) { return p.tight && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["padding: 4px 14px;"], ["padding: 4px 14px;"]))); }, function (p) { return p.disabled && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["opacity: 0.45;"], ["opacity: 0.45;"]))); }, function (p) { return p.align === 'left' && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["text-align:left;"], ["text-align:left;"]))); }, function (p) { return p.align === 'center' && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["text-align:center;"], ["text-align:center;"]))); }, function (p) { return p.align === 'right' && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["text-align:right;"], ["text-align:right;"]))); }, function (p) { return p.theme.radius; }, function (p) { return p.stacked && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["&:before {\n      content: '';\n      left: 4px;\n      top: 4px;\n      right: -4px;\n      bottom: -4px;\n      z-index: -1;\n    }"], ["&:before {\n      content: '';\n      left: 4px;\n      top: 4px;\n      right: -4px;\n      bottom: -4px;\n      z-index: -1;\n    }"]))); }, function (p) { return p.stacked && p.tall && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["&:after {\n      content: '';\n      left: 7px;\n      top: 7px;\n      right: -7px;\n      bottom: -7px;\n      z-index: -2;\n    }"], ["&:after {\n      content: '';\n      left: 7px;\n      top: 7px;\n      right: -7px;\n      bottom: -7px;\n      z-index: -2;\n    }"]))); }, function (p) { return p.piled && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n      &:before, &:after {\n        content: '';\n        left: 5px;\n        top: 0;\n        right: -5px;\n        bottom: 0;\n        z-index: -1;\n        transform: rotate(.4deg);\n      }\n      &:after {\n        left: 0;\n        right: 0;\n        z-index: -2;\n        transform: rotate(.8deg);\n      }\n    "], ["\n      &:before, &:after {\n        content: '';\n        left: 5px;\n        top: 0;\n        right: -5px;\n        bottom: 0;\n        z-index: -1;\n        transform: rotate(.4deg);\n      }\n      &:after {\n        left: 0;\n        right: 0;\n        z-index: -2;\n        transform: rotate(.8deg);\n      }\n    "]))); });
/**
 * A Segment places a border around some content.
 *
 * @example
 * <Segment piled>Some content</Segment>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-segment--properties
 */
var Segment = /** @class */ (function (_super) {
    __extends(Segment, _super);
    function Segment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Segment.prototype.render = function () {
        return (React.createElement(SegmentStyled, __assign({}, this.props)));
    };
    Segment.displayName = 'Segment';
    return Segment;
}(React.PureComponent));
export { Segment };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25;
