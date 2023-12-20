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
var StandardInputBase = /** @class */ (function (_super) {
    __extends(StandardInputBase, _super);
    function StandardInputBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            if (_this.props.onChange) {
                _this.props.onChange(e.target.value);
            }
        };
        return _this;
    }
    StandardInputBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("input", { className: this.props.className, value: p.value == null ? '' : p.value, placeholder: p.placeholder, disabled: p.disabled, type: p.type, maxLength: p.maxLength, autoComplete: p.autocomplete, onChange: this.handleChange, onFocus: this.props.onFocus }));
    };
    return StandardInputBase;
}(React.Component));
var StandardInput = styled(StandardInputBase).attrs(function (p) { return ({
    iconPos: !p.iconPosition ? 'left' : p.iconPosition,
    borderColor: p.theme.normalColor,
    highBorderColor: lighten(0.25, p.theme.primaryColor)
}); })(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width:            100%;\n  box-sizing:       border-box;\n  z-index:          0;\n  font-family:      ", ", sans-serif;\n  font-size:        ", "px;\n  line-height:      17px;\n  text-align:       left;\n  color:            ", ";\n  border:           solid 1px ", ";\n  border-radius:    ", "px;\n  outline:          0;\n  background-color: ", ";\n  padding:          9px 14px;\n\n  /* Padding for icon, if there is one: */\n  ", "  \n\n  /* Padding for clear icon, if present: */\n  ", "\n\n  /* Define colors for placeholder text. */\n  &::placeholder {\n    color: ", ";\n    opacity: 1 !important; /* Firefox applies opacity */\n  }\n\n  /* Define colors for selected text. */\n  &::selection {\n    background-color: rgba(100,100,100,.4);\n    color: ", ";\n  }\n\n  /* Define colors when input has focus. */\n  transition: border-color ", "s ease;\n  &:focus {\n    border-color: ", ";\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  /* Make sure HTML5 validation does not show up. */\n  &:valid {\n    box-shadow: none;\n  }\n  &:invalid {\n    box-shadow: none;\n  }\n\n  /* Error */\n  transition: background-color ", "s ease;\n  ", "\n\n  /* Disabled */\n  ", "\n\n  /* Transparent (borderless) */\n  ", "\n\n  /* Turn off number spinners. */\n  &[type=number]::-webkit-inner-spin-button, \n  &[type=number]::-webkit-outer-spin-button { \n    -webkit-appearance: none;  /* Webkit (Chrome) */\n    margin: 0; \n  }    \n  &[type=number] {\n    -moz-appearance:textfield; /* Firefox */\n  }       \n"], ["\n  width:            100%;\n  box-sizing:       border-box;\n  z-index:          0;\n  font-family:      ", ", sans-serif;\n  font-size:        ", "px;\n  line-height:      17px;\n  text-align:       left;\n  color:            ", ";\n  border:           solid 1px ", ";\n  border-radius:    ", "px;\n  outline:          0;\n  background-color: ", ";\n  padding:          9px 14px;\n\n  /* Padding for icon, if there is one: */\n  ", "  \n\n  /* Padding for clear icon, if present: */\n  ", "\n\n  /* Define colors for placeholder text. */\n  &::placeholder {\n    color: ", ";\n    opacity: 1 !important; /* Firefox applies opacity */\n  }\n\n  /* Define colors for selected text. */\n  &::selection {\n    background-color: rgba(100,100,100,.4);\n    color: ", ";\n  }\n\n  /* Define colors when input has focus. */\n  transition: border-color ", "s ease;\n  &:focus {\n    border-color: ", ";\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  /* Make sure HTML5 validation does not show up. */\n  &:valid {\n    box-shadow: none;\n  }\n  &:invalid {\n    box-shadow: none;\n  }\n\n  /* Error */\n  transition: background-color ", "s ease;\n  ", "\n\n  /* Disabled */\n  ", "\n\n  /* Transparent (borderless) */\n  ", "\n\n  /* Turn off number spinners. */\n  &[type=number]::-webkit-inner-spin-button, \n  &[type=number]::-webkit-outer-spin-button { \n    -webkit-appearance: none;  /* Webkit (Chrome) */\n    margin: 0; \n  }    \n  &[type=number] {\n    -moz-appearance:textfield; /* Firefox */\n  }       \n"])), function (p) { return p.theme.fontName; }, function (p) { return p.theme.fontSize; }, function (p) { return p.theme.fontColor; }, function (p) { return p.borderColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.background; }, function (p) { return p.icon && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "])), p.iconPos === 'left' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["padding-left: 40px;"], ["padding-left: 40px;"]))), p.iconPos === 'right' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["padding-right: 40px;"], ["padding-right: 40px;"])))); }, function (p) { return p.clearable && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["}\n    padding-right: 40px;\n  "], ["}\n    padding-right: 40px;\n  "]))); }, function (p) { return lighten(0.6, p.theme.fontColor); }, function (p) { return p.theme.fontColor; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.highBorderColor; }, function (p) { return lighten(0.4, p.theme.fontColor); }, function (p) { return p.theme.transition.duration; }, function (p) { return p.error && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: ", ";\n    border-color: ", ";\n    background: ", ";\n    &::placeholder {\n      color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n      &::placeholder {\n        color: ", ";\n      }      \n    }\n    box-shadow: none;\n  "], ["\n    color: ", ";\n    border-color: ", ";\n    background: ", ";\n    &::placeholder {\n      color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n      &::placeholder {\n        color: ", ";\n      }      \n    }\n    box-shadow: none;\n  "])), p.theme.errorColor.color, p.theme.errorColor.border, p.theme.errorColor.background, p.theme.errorColor.color, p.theme.errorColor.border, p.theme.errorColor.color); }, function (p) { return p.disabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    opacity: 0.5;\n  "], ["\n    opacity: 0.5;\n  "]))); }, function (p) { return p.transparent && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    border-width: 0px;\n  "], ["\n    border-width: 0px;\n  "]))); });
export { StandardInput };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
