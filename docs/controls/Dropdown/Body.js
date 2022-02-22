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
import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
// Helpers
import { lighten } from '../../helper/lighten';
import { Input } from '../Input';
var BodyBase = /** @class */ (function (_super) {
    __extends(BodyBase, _super);
    function BodyBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BodyBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            p.onSearch &&
                React.createElement(SearchBox, null,
                    React.createElement(Input, { icon: "search", clearable: true, error: p.error, value: p.search, transparent: true, fluid: true, type: "text", onChange: p.onSearch })),
            React.createElement(BodyInner, null, p.children)));
    };
    return BodyBase;
}(React.Component));
// Maximum number of children before scrollbar is added.
var MAX_CHILDREN_VISIBLE = 6;
/**
 * A search input is contained in a SearchBox to give it the same
 * height as other list items. This is important for opening/closing
 * the list to the correct height.
 */
var SearchBox = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var BodyInner = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n"], ["\n"])));
var Body = styled(BodyBase).attrs(function (p) { return ({
    // Height is based on number of children, up to MAX_CHILDREN_VISIBLE, 
    // plus a search box added if specified.
    totalHeight: (Math.min(React.Children.count(p.children), (p.maxItems ? p.maxItems : MAX_CHILDREN_VISIBLE)) + (p.onSearch ? 1 : 0)) * 57 + 1,
    totalInnerHeight: Math.min(React.Children.count(p.children), (p.maxItems ? p.maxItems : MAX_CHILDREN_VISIBLE)) * 57 + 1
}); })(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position:       absolute;\n  z-index:        100;\n  box-sizing:     border-box;\n  width:          100%;\n  height:         1000px; /* We animate max-height based on child count. */\n  overflow-y:     hidden;\n\n  /* Border is grey, unless error. */\n  border:         solid 1px ", ";\n  border-radius:  ", "px;\n\n  /* Background is theme background */\n  background:     ", ";\n\n  /* Dropbox can open upwards or downwards. This affects its\n     positioning relative to the parent. */\n  ", "\n  ", "\n\n  /* Border color, max-height and opacity are transitioned \n     as Body opens and closes. */\n  /* In a previous iteration, this worked with scaleY rather\n     than max-height. It turns out that applying a transformation\n     causes fractional pixel problems on its element. Since \n     Dropdown can be part of a flex, fractional pixels\n     will occur. */\n  transition: opacity ", "s ease-in-out, \n              max-height ", "s ease-out, \n              border-color ", "s ease-in-out;\n  opacity: 0;\n  max-height: 0;\n  ", "\n\n  ", " {\n    overflow-x:     hidden;\n    /* If there are more children than MAX_CHILDREN_VISIBLE, \n       then the body content scrolls vertically. */\n    overflow-y:     ", ";\n    height:         ", "px;\n  }\n\n  ", " {\n    box-sizing: border-box;\n    padding-left: 12px;\n    padding-right: 12px;\n    padding-top: 10px;\n    height: 56px;\n    ", "\n  }\n"], ["\n  position:       absolute;\n  z-index:        100;\n  box-sizing:     border-box;\n  width:          100%;\n  height:         1000px; /* We animate max-height based on child count. */\n  overflow-y:     hidden;\n\n  /* Border is grey, unless error. */\n  border:         solid 1px ", ";\n  border-radius:  ", "px;\n\n  /* Background is theme background */\n  background:     ", ";\n\n  /* Dropbox can open upwards or downwards. This affects its\n     positioning relative to the parent. */\n  ", "\n  ", "\n\n  /* Border color, max-height and opacity are transitioned \n     as Body opens and closes. */\n  /* In a previous iteration, this worked with scaleY rather\n     than max-height. It turns out that applying a transformation\n     causes fractional pixel problems on its element. Since \n     Dropdown can be part of a flex, fractional pixels\n     will occur. */\n  transition: opacity ", "s ease-in-out, \n              max-height ", "s ease-out, \n              border-color ", "s ease-in-out;\n  opacity: 0;\n  max-height: 0;\n  ", "\n\n  ", " {\n    overflow-x:     hidden;\n    /* If there are more children than MAX_CHILDREN_VISIBLE, \n       then the body content scrolls vertically. */\n    overflow-y:     ", ";\n    height:         ", "px;\n  }\n\n  ", " {\n    box-sizing: border-box;\n    padding-left: 12px;\n    padding-right: 12px;\n    padding-top: 10px;\n    height: 56px;\n    ", "\n  }\n"])), function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.background; }, function (p) { return p.upwards && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    bottom: calc(100% - 1px);\n    /* Box-shadow is only at top(spread = -1px). */\n    box-shadow:     rgba(34, 36, 38, 0.2) 0 -2px 2px -1px;    \n    ", "\n  "], ["\n    bottom: calc(100% - 1px);\n    /* Box-shadow is only at top(spread = -1px). */\n    box-shadow:     rgba(34, 36, 38, 0.2) 0 -2px 2px -1px;    \n    ", "\n  "])), !p.inline && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      border-bottom: none;\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px;      \n    "], ["\n      border-bottom: none;\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px;      \n    "])))); }, function (p) { return !p.upwards && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    top: calc(100% - 1px);\n    /* Box-shadow is only at bottom (spread = -1px). */\n    box-shadow:     rgba(34, 36, 38, 0.2) 0 2px 2px -1px;\n    ", "\n  "], ["\n    top: calc(100% - 1px);\n    /* Box-shadow is only at bottom (spread = -1px). */\n    box-shadow:     rgba(34, 36, 38, 0.2) 0 2px 2px -1px;\n    ", "\n  "])), !p.inline && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      border-top: none;\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px; \n    "], ["\n      border-top: none;\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px; \n    "])))); }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.open && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    transition: opacity ", "s ease-in, \n                max-height ", "s ease-in, \n                border-color ", "s ease-in;\n    ", "\n    opacity: 1;\n    max-height: ", "px;\n  "], ["\n    transition: opacity ", "s ease-in, \n                max-height ", "s ease-in, \n                border-color ", "s ease-in;\n    ", "\n    opacity: 1;\n    max-height: ", "px;\n  "])), function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, !p.inline && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), function (p) { return lighten(0.25, p.theme.primaryColor); }), p.totalHeight); }, BodyInner, function (p) { return (React.Children.count(p.children) > (p.maxItems ? p.maxItems : MAX_CHILDREN_VISIBLE)) ? 'scroll' : 'hidden'; }, function (p) { return p.totalInnerHeight; }, SearchBox, function (p) { return p.error && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["background: ", ";"], ["background: ", ";"])), p.theme.errorColor.background); });
export { Body };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
