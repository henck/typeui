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
import { lighten } from '../../helper/lighten';
var TextareaBase = /** @class */ (function (_super) {
    __extends(TextareaBase, _super);
    function TextareaBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            if (_this.props.onChange) {
                _this.props.onChange(e.target.value);
            }
        };
        return _this;
    }
    TextareaBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("textarea", { className: this.props.className, name: p.name, value: p.value == null ? '' : p.value, placeholder: p.placeholder, disabled: p.disabled, rows: p.rows, onChange: this.handleChange }));
    };
    return TextareaBase;
}(React.Component));
var TextareaStyled = styled(TextareaBase).attrs(function (p) { return ({
    borderColor: p.theme.normalColor,
    highBorderColor: lighten(0.25, p.theme.primaryColor),
}); })(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  /* No resize grip */\n  resize: none;\n\n  /* Height */\n  ", "\n  ", "\n\n  width:            250px;\n  /* Font-size must be redefined or it will be bigger than container font size. */\n  font-size:        100%;\n  ", "\n  box-sizing:       border-box;\n  z-index:          0;\n  font-family:      Roboto, sans-serif;\n  font-size:        ", "px;\n  line-height:      17px;\n  text-align:       left;\n  color:            ", ";\n  border:           solid 1px ", ";\n  border-radius:    ", "px;\n  outline:          0;\n  background-color: ", ";\n  padding:          9.5px 14px;\n\n  /* Monospaced font */\n  ", "\n\n  /* Define colors for placeholder text. */\n  &::placeholder {\n    color: ", ";\n    opacity: 1 !important; /* Firefox applies opacity */\n  }\n\n  /* Define colors for selected text. */\n  &::selection {\n    background-color: rgba(100,100,100,.4);\n    color: ", ";\n  }\n\n  /* Define colors when input has focus. */\n  transition: border-color ", "s ease;\n  &:focus {\n    border-color: ", ";\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  /* Make sure HTML5 validation does not show up. */\n  &:valid {\n    box-shadow: none;\n  }\n  &:invalid {\n    box-shadow: none;\n  }\n\n  /* Error */\n  ", "\n\n  /* Disabled */\n  ", "\n\n  /* Transparent (borderless) */\n  ", "\n"], ["\n  position: relative;\n  display: inline-block;\n\n  /* No resize grip */\n  resize: none;\n\n  /* Height */\n  ", "\n  ", "\n\n  width:            250px;\n  /* Font-size must be redefined or it will be bigger than container font size. */\n  font-size:        100%;\n  ", "\n  box-sizing:       border-box;\n  z-index:          0;\n  font-family:      Roboto, sans-serif;\n  font-size:        ", "px;\n  line-height:      17px;\n  text-align:       left;\n  color:            ", ";\n  border:           solid 1px ", ";\n  border-radius:    ", "px;\n  outline:          0;\n  background-color: ", ";\n  padding:          9.5px 14px;\n\n  /* Monospaced font */\n  ", "\n\n  /* Define colors for placeholder text. */\n  &::placeholder {\n    color: ", ";\n    opacity: 1 !important; /* Firefox applies opacity */\n  }\n\n  /* Define colors for selected text. */\n  &::selection {\n    background-color: rgba(100,100,100,.4);\n    color: ", ";\n  }\n\n  /* Define colors when input has focus. */\n  transition: border-color ", "s ease;\n  &:focus {\n    border-color: ", ";\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  /* Make sure HTML5 validation does not show up. */\n  &:valid {\n    box-shadow: none;\n  }\n  &:invalid {\n    box-shadow: none;\n  }\n\n  /* Error */\n  ", "\n\n  /* Disabled */\n  ", "\n\n  /* Transparent (borderless) */\n  ", "\n"])), function (p) { return !p.minHeight && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["min-height: 80px;"], ["min-height: 80px;"]))); }, function (p) { return p.minHeight && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["min-height: ", "px;"], ["min-height: ", "px;"])), p.minHeight); }, function (p) { return p.fluid && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["width: 100%;"], ["width: 100%;"]))); }, function (p) { return p.theme.fontSize; }, function (p) { return p.theme.fontColor; }, function (p) { return p.borderColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.background; }, function (p) { return p.monospaced && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", \"Consolas\", \"source-code-pro\", monospace;"], ["font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", \"Consolas\", \"source-code-pro\", monospace;"]))); }, function (p) { return lighten(0.6, p.theme.fontColor); }, function (p) { return p.theme.fontColor; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.highBorderColor; }, function (p) { return lighten(0.4, p.theme.fontColor); }, function (p) { return p.error && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: ", ";\n    border-color: ", ";\n    background: ", ";\n    &::placeholder {\n      color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n    }\n    box-shadow: none;\n  "], ["\n    color: ", ";\n    border-color: ", ";\n    background: ", ";\n    &::placeholder {\n      color: ", ";\n    }\n    &:focus {\n      border-color: ", ";\n    }\n    box-shadow: none;\n  "])), p.theme.errorColor.color, p.theme.errorColor.border, p.theme.errorColor.background, p.theme.errorColor.color, p.theme.errorColor.border); }, function (p) { return p.disabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    opacity: 0.5;\n  "], ["\n    opacity: 0.5;\n  "]))); }, function (p) { return p.transparent && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    border-width: 0px;\n  "], ["\n    border-width: 0px;\n  "]))); });
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className },
            React.createElement(TextareaStyled, __assign({}, _this.props))); };
        return _this;
    }
    return Textarea;
}(React.Component));
export { Textarea };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
