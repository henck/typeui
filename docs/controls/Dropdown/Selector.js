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
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
var SelectorBase = /** @class */ (function (_super) {
    __extends(SelectorBase, _super);
    function SelectorBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClear = function (e) {
            e.stopPropagation();
            if (_this.props.onClear)
                _this.props.onClear();
        };
        return _this;
    }
    SelectorBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onClick: p.onClick },
            React.createElement("span", null, p.children),
            React.createElement("svg", null,
                React.createElement("use", { xlinkHref: "spritemap.svg#caret-down" })),
            React.createElement("svg", { onClick: this.handleClear },
                React.createElement("use", { xlinkHref: "spritemap.svg#times" }))));
    };
    return SelectorBase;
}(React.Component));
var Selector = styled(SelectorBase)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position:        relative;\n  display:         block;\n  box-sizing:      border-box;\n  width:           100%;\n  cursor:          pointer;\n  background:      ", ";\n\n  /* Disabled */\n  ", "  \n\n  &>span {\n    display: block;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    white-space: nowrap;\n    /* Add ellipsis to selection text */\n    ", "\n  }\n\n  /* Inline Dropdowns have no border, but normal Dropdowns do. */\n  border:         solid 1px ", ";\n  border-radius:  ", "px;\n  line-height:    17px;\n  padding:        9px 30px 9px 14px;\n  ", "\n  min-height:     17px;\n  ", "\n\n  /* Placeholder labels will be light in color: */\n  ", "\n\n  /* When in error state, color text. */\n  ", "\n  \n  /* When the Dropdown is open, the selector's bottom edge \n     (or top edge, for upwards) is colored white. */\n  transition: border-color ", "s ease-in-out, \n              border-radius ", "s ease-in-out,\n              color ", "s ease-in-out,\n              background-color ", "s ease-in-out;\n  ", "\n\n  /* If parent DIV has focus, give this a border. */\n  ", "\n  \n  /* Icon size and positions: */\n  & > svg {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    z-index: 1;\n    width: 17px;\n    height: 17px;\n    margin-left: 0.5em;\n  }\n\n  /* Caret icon is only shown when there is an onClear callback. */\n  & > svg:nth-of-type(1) {\n    display: ", ";\n    transition: fill ", "s ease-in-out;\n    fill: ", ";\n  }\n  /* Clear icon is only shown when there is an onClear callback. */\n  & > svg:nth-of-type(2) {\n    fill: #888;\n    display: ", ";\n    &:hover {\n      fill: ", ";\n    }\n  }\n"], ["\n  position:        relative;\n  display:         block;\n  box-sizing:      border-box;\n  width:           100%;\n  cursor:          pointer;\n  background:      ", ";\n\n  /* Disabled */\n  ", "  \n\n  &>span {\n    display: block;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    white-space: nowrap;\n    /* Add ellipsis to selection text */\n    ", "\n  }\n\n  /* Inline Dropdowns have no border, but normal Dropdowns do. */\n  border:         solid 1px ", ";\n  border-radius:  ", "px;\n  line-height:    17px;\n  padding:        9px 30px 9px 14px;\n  ", "\n  min-height:     17px;\n  ", "\n\n  /* Placeholder labels will be light in color: */\n  ", "\n\n  /* When in error state, color text. */\n  ", "\n  \n  /* When the Dropdown is open, the selector's bottom edge \n     (or top edge, for upwards) is colored white. */\n  transition: border-color ", "s ease-in-out, \n              border-radius ", "s ease-in-out,\n              color ", "s ease-in-out,\n              background-color ", "s ease-in-out;\n  ", "\n\n  /* If parent DIV has focus, give this a border. */\n  ", "\n  \n  /* Icon size and positions: */\n  & > svg {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    z-index: 1;\n    width: 17px;\n    height: 17px;\n    margin-left: 0.5em;\n  }\n\n  /* Caret icon is only shown when there is an onClear callback. */\n  & > svg:nth-of-type(1) {\n    display: ", ";\n    transition: fill ", "s ease-in-out;\n    fill: ", ";\n  }\n  /* Clear icon is only shown when there is an onClear callback. */\n  & > svg:nth-of-type(2) {\n    fill: #888;\n    display: ", ";\n    &:hover {\n      fill: ", ";\n    }\n  }\n"])), function (p) { return p.theme.background; }, function (p) { return p.disabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    opacity: 0.5;\n    cursor: auto;\n  "], ["\n    opacity: 0.5;\n    cursor: auto;\n  "]))); }, function (p) { return !p.multiple && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["text-overflow: ellipsis;"], ["text-overflow: ellipsis;"]))); }, function (p) { return p.inline ? "transparent" : p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.multiple && !p.placeholder && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["padding: 7px 30px 7px 14px;"], ["padding: 7px 30px 7px 14px;"]))); }, function (p) { return p.error && !p.open && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    background:   ", ";\n    border-color: ", ";\n  "], ["\n    background:   ", ";\n    border-color: ", ";\n  "])), p.theme.errorColor.background, p.inline ? "transparent" : p.theme.errorColor.border); }, function (p) { return p.placeholder && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: ", ";  \n  "], ["\n    color: ", ";  \n  "])), function (p) { return lighten(0.6, p.theme.fontColor); }); }, function (p) { return p.error && !p.open && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), p.theme.errorColor.color); }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.open && !p.inline && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    border-color: ", ";\n    border-", "-color: #fff;\n    border-", "-left-radius: 0px;\n    border-", "-right-radius: 0px;\n  "], ["\n    border-color: ", ";\n    border-", "-color: #fff;\n    border-", "-left-radius: 0px;\n    border-", "-right-radius: 0px;\n  "])), function (p) { return lighten(0.25, p.theme.primaryColor); }, p.upwards ? 'top' : 'bottom', p.upwards ? 'top' : 'bottom', p.upwards ? 'top' : 'bottom'); }, function (p) { return !p.inline && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    div:focus & {\n      border-color: ", ";\n    }\n  "], ["\n    div:focus & {\n      border-color: ", ";\n    }\n  "])), function (p) { return lighten(0.25, p.theme.primaryColor); }); }, function (p) { return p.onClear ? 'none' : 'block'; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return (p.error && !p.open) ? p.theme.errorColor.color : (p.disabled ? '#888' : p.theme.fontColor); }, function (p) { return p.onClear ? 'block' : 'none'; }, function (p) { return p.theme.fontColor; });
export { Selector };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
