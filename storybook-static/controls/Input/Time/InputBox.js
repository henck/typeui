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
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
import { format, parse } from 'date-fns';
// Helpers
import { lighten } from '../../../helper/lighten';
var InputBoxBase = /** @class */ (function (_super) {
    __extends(InputBoxBase, _super);
    function InputBoxBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputBoxBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { tabIndex: 0, className: p.className, onKeyDown: p.onKeyDown },
            p.value && format(parse(p.value, 'HH:mm:ss', new Date()), p.format ? p.format : p.defaultFormat),
            !p.value && p.placeholder));
    };
    return InputBoxBase;
}(React.Component));
var InputBox = styled(InputBoxBase).attrs(function (p) { return ({
    iconPos: !p.iconPosition ? 'left' : p.iconPosition
}); })(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: block;\n  border: solid 1px ", ";\n  box-sizing: border-box;\n  border-radius: ", "px;\n  cursor: pointer;\n  width: 100%;\n  height: 38px;\n  line-height: 38px;\n  padding: 0 14px;\n\n  /* Text overflow */\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  /* Padding for icon, if there is one: */\n  ", "     \n  \n  /* Focused */\n  outline: none;\n  transition: border-color ", "s ease;\n  &:focus {\n    border-color: ", ";\n  }\n\n  /* Placeholder */ \n  ", "\n\n  /* Error */\n  transition: background-color ", "s ease;\n  ", "\n\n  /* Define colors for selected text. */\n  &::selection {\n    background-color: rgba(100,100,100,.4);\n    color: ", ";\n  }  \n\n  /* Disabled */\n  ", "  \n\n  /* Transparent (borderless) */\n  ", "  \n"], ["\n  display: block;\n  border: solid 1px ", ";\n  box-sizing: border-box;\n  border-radius: ", "px;\n  cursor: pointer;\n  width: 100%;\n  height: 38px;\n  line-height: 38px;\n  padding: 0 14px;\n\n  /* Text overflow */\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  /* Padding for icon, if there is one: */\n  ", "     \n  \n  /* Focused */\n  outline: none;\n  transition: border-color ", "s ease;\n  &:focus {\n    border-color: ", ";\n  }\n\n  /* Placeholder */ \n  ", "\n\n  /* Error */\n  transition: background-color ", "s ease;\n  ", "\n\n  /* Define colors for selected text. */\n  &::selection {\n    background-color: rgba(100,100,100,.4);\n    color: ", ";\n  }  \n\n  /* Disabled */\n  ", "  \n\n  /* Transparent (borderless) */\n  ", "  \n"])), function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.icon && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "])), p.iconPos === 'left' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["padding-left: 40px;"], ["padding-left: 40px;"]))), p.iconPos === 'right' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["padding-right: 40px;"], ["padding-right: 40px;"])))); }, function (p) { return p.theme.transition.duration; }, function (p) { return lighten(0.25, p.theme.primaryColor); }, function (p) { return !p.value && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: ", ";\n    &:focus { color: ", "; }\n  "], ["\n    color: ", ";\n    &:focus { color: ", "; }\n  "])), lighten(0.6, p.theme.fontColor), lighten(0.4, p.theme.fontColor)); }, function (p) { return p.theme.transition.duration; }, function (p) { return p.error && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    border-color: ", ";\n    background-color: ", ";\n    color: ", ";\n    box-shadow: none;\n  "], ["\n    border-color: ", ";\n    background-color: ", ";\n    color: ", ";\n    box-shadow: none;\n  "])), p.theme.errorColor.border, p.theme.errorColor.background, p.theme.errorColor.color); }, function (p) { return p.theme.fontColor; }, function (p) { return p.disabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    opacity: 0.5;\n    cursor: auto;\n  "], ["\n    opacity: 0.5;\n    cursor: auto;\n  "]))); }, function (p) { return p.transparent && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    border-width: 0px;\n  "], ["\n    border-width: 0px;\n  "]))); });
export { InputBox };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
