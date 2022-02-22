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
var CheckboxBase = /** @class */ (function (_super) {
    __extends(CheckboxBase, _super);
    function CheckboxBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            // For radios, we use the value attribute.
            // For checkboxes, we use the checked attribute.
            var value = _this.props.radio ? e.target.value : e.target.checked;
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        return _this;
    }
    CheckboxBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("label", { className: p.className },
            React.createElement("input", { name: p.name, type: p.radio ? "radio" : "checkbox", value: p.value === null ? undefined : p.value, checked: p.checked === null ? false : p.checked, disabled: p.disabled, onChange: this.handleChange }),
            React.createElement("div", null,
                React.createElement("svg", null,
                    React.createElement("use", { xlinkHref: "spritemap.svg#check" }))),
            React.createElement("span", null, p.label)));
    };
    return CheckboxBase;
}(React.Component));
var CheckboxStyled = styled(CheckboxBase).attrs(function (p) { return ({
    borderColor: p.error ? p.theme.errorColor.border : p.theme.normalColor,
    checkedColor: p.error ? p.theme.errorColor.border : p.theme.primaryColor,
    hoverColor: p.error ? p.theme.errorColor.border : darken(0.1, p.theme.normalColor)
}); })(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  padding-left: ", "px;\n  padding-right: 16px;\n  line-height: 17px;\n  cursor: pointer;\n  outline: none;\n\n  /* The clickable div. */\n  & > div {\n    position: absolute;\n    box-sizing: border-box;\n    left: 0;\n    top: 0;\n  }\n\n  svg {\n    display: none;  \n  }\n\n  /* Clickable div: checkbox case */\n  ", "\n\n  /* Clickable div: circle case */\n  ", "  \n\n  /* Clickable div: Toggle/Slider case */\n  ", "\n\n  /* The input[type='checkbox'] itself is not visible. */\n  input {\n    display: none;\n  }\n\n  /* The label is shifted slightly to align with the checkbox div. */\n  span {\n    display: inline-block;\n    padding-top: 1px;\n    ", "\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  padding-left: ", "px;\n  padding-right: 16px;\n  line-height: 17px;\n  cursor: pointer;\n  outline: none;\n\n  /* The clickable div. */\n  & > div {\n    position: absolute;\n    box-sizing: border-box;\n    left: 0;\n    top: 0;\n  }\n\n  svg {\n    display: none;  \n  }\n\n  /* Clickable div: checkbox case */\n  ", "\n\n  /* Clickable div: circle case */\n  ", "  \n\n  /* Clickable div: Toggle/Slider case */\n  ", "\n\n  /* The input[type='checkbox'] itself is not visible. */\n  input {\n    display: none;\n  }\n\n  /* The label is shifted slightly to align with the checkbox div. */\n  span {\n    display: inline-block;\n    padding-top: 1px;\n    ", "\n  }\n"
    /**
     * A Checkbox can be used to create either a HTML checkbox or a HTML radio button.
     *
     * @example
     * <Checkbox label="One" name="myradio" radio value={1}/>
     * <Checkbox label="Two" name="myradio" radio value={2}/>
     *
     * @link https://henck.github.io/typeui/?path=/story/controls-checkbox--properties
     */
])), function (p) { return (!p.type || p.type === 'check' || p.type === 'circle') ? 26 : 46; }, function (p) { return ((!p.type && !p.radio) || p.type === 'check') && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    & > div {\n      width: 17px;\n      height: 17px;\n      border: solid 1px ", ";\n      border-radius: ", "px;\n      transition: border-color 0.1s ease;\n    }\n    ", "\n\n    svg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 15px;\n      height: 15px;\n      fill: #fff;\n    }    \n\n    input:checked + div {\n      border-color: ", ";\n      background: ", ";\n      svg {\n        display: block;\n      }\n    }    \n  "], ["\n    & > div {\n      width: 17px;\n      height: 17px;\n      border: solid 1px ", ";\n      border-radius: ", "px;\n      transition: border-color 0.1s ease;\n    }\n    ", "\n\n    svg {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 15px;\n      height: 15px;\n      fill: #fff;\n    }    \n\n    input:checked + div {\n      border-color: ", ";\n      background: ", ";\n      svg {\n        display: block;\n      }\n    }    \n  "])), p.borderColor, p.theme.radius, !p.disabled && !p.error && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      &:hover > div {\n        border-color: ", ";\n      }\n    "], ["\n      &:hover > div {\n        border-color: ", ";\n      }\n    "])), p.hoverColor), p.checkedColor, p.checkedColor); }, function (p) { return ((!p.type && p.radio) || p.type === 'circle') && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    & > div {\n      width: 17px;\n      height: 17px;\n      border: solid 1px ", ";\n      border-radius: 50%;\n      transition: border-color ", "s ease;\n    }\n\n    ", "    \n\n    input:checked + div {\n      &:after {\n        position: absolute;\n        content: '';\n        left: 3px;\n        top: 3px;\n        height: 3px;\n        width: 9px;\n        height: 9px;\n        border-radius: 50%;\n        background: ", ";\n      }\n    }    \n  "], ["\n    & > div {\n      width: 17px;\n      height: 17px;\n      border: solid 1px ", ";\n      border-radius: 50%;\n      transition: border-color ", "s ease;\n    }\n\n    ", "    \n\n    input:checked + div {\n      &:after {\n        position: absolute;\n        content: '';\n        left: 3px;\n        top: 3px;\n        height: 3px;\n        width: 9px;\n        height: 9px;\n        border-radius: 50%;\n        background: ", ";\n      }\n    }    \n  "])), p.borderColor, p.theme.transition.duration, !p.disabled && !p.error && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      &:hover > div {\n        border-color: ", ";\n      }\n    "], ["\n      &:hover > div {\n        border-color: ", ";\n      }\n    "])), p.hoverColor), p.checkedColor); }, function (p) { return (p.type === 'toggle' || p.type === 'slider') && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    & > div {\n      width: 36px;\n      height: ", "px;\n      border-radius: ", "px;\n      ", "\n      background-color: ", ";\n      transition: background-color 0.1s ease;\n      &:after {\n        position: absolute;\n        content: '';\n        z-index: 1;\n        left: 0;\n        top: ", "px;\n        width: 17px;\n        height: 17px;\n        border-radius: 50%;\n        background: #fff linear-gradient(transparent, rgba(0,0,0,.05));\n        box-shadow: 0 1px 2px 0 rgba(34,36,38,.15), 0 0 0 1px rgba(34,36,38,.15) inset;\n        transition: left 0.2s ease;\n      }\n    }\n\n    ", "    \n\n    input:checked + div {\n      background-color: ", ";\n      &:after {\n        left: 19px;\n      }\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  "], ["\n    & > div {\n      width: 36px;\n      height: ", "px;\n      border-radius: ", "px;\n      ", "\n      background-color: ", ";\n      transition: background-color 0.1s ease;\n      &:after {\n        position: absolute;\n        content: '';\n        z-index: 1;\n        left: 0;\n        top: ", "px;\n        width: 17px;\n        height: 17px;\n        border-radius: 50%;\n        background: #fff linear-gradient(transparent, rgba(0,0,0,.05));\n        box-shadow: 0 1px 2px 0 rgba(34,36,38,.15), 0 0 0 1px rgba(34,36,38,.15) inset;\n        transition: left 0.2s ease;\n      }\n    }\n\n    ", "    \n\n    input:checked + div {\n      background-color: ", ";\n      &:after {\n        left: 19px;\n      }\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  "])), p.type === 'toggle' ? 17 : 3, p.type === 'toggle' ? 8.5 : 2, p.type === 'slider' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        margin-top: 7px;\n        margin-bottom: 7px;\n      "], ["\n        margin-top: 7px;\n        margin-bottom: 7px;\n      "]))), p.borderColor, p.type === 'toggle' ? 0 : -7, !p.disabled && !p.error && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["}\n      &:hover > div {\n        background: ", ";\n      }\n    "], ["}\n      &:hover > div {\n        background: ", ";\n      }\n    "])), p.hoverColor), p.checkedColor, darken(0.1, p.checkedColor)); }, function (p) { return p.disabled && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      color: #aaa;\n    "], ["\n      color: #aaa;\n    "]))); });
/**
 * A Checkbox can be used to create either a HTML checkbox or a HTML radio button.
 *
 * @example
 * <Checkbox label="One" name="myradio" radio value={1}/>
 * <Checkbox label="Two" name="myradio" radio value={2}/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-checkbox--properties
 */
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.render = function () {
        return (React.createElement(CheckboxStyled, __assign({}, this.props)));
    };
    Checkbox.displayName = 'Checkbox';
    return Checkbox;
}(React.Component));
export { Checkbox };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
