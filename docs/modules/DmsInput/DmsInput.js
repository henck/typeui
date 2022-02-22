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
import { Input } from '../../controls/Input';
import { Label, LabelStyled } from '../../controls/Label';
import { lighten } from '../../helper/lighten';
import { DMS } from '../../helper/DMS';
var DmsInputBase = /** @class */ (function (_super) {
    __extends(DmsInputBase, _super);
    function DmsInputBase(props) {
        var _this = _super.call(this, props) || this;
        // If DMS was updated, then float value must be truncated.
        _this.updateDMS = false;
        _this.getSign = function () {
            return Math.sign(_this.props.value) == -1 ? -1 : 1;
        };
        _this.getDegrees = function () {
            var _a = DMS.toDMS(_this.props.value), d = _a[0], m = _a[1], s = _a[2];
            return d;
        };
        _this.getMinutes = function () {
            var _a = DMS.toDMS(_this.props.value), d = _a[0], m = _a[1], s = _a[2];
            return m;
        };
        _this.getSeconds = function () {
            var _a = DMS.toDMS(_this.props.value), d = _a[0], m = _a[1], s = _a[2];
            return s;
        };
        _this.toFloat = function (d, m, s, sign) {
            if (isNaN(d))
                d = 0;
            if (isNaN(m))
                m = 0;
            if (isNaN(s))
                s = 0;
            return DMS.toFloat(d, m, s) * sign;
        };
        // Convert degrees, minutes or seconds to int and force into a range.
        _this.forceRange = function (value, max) {
            var v = parseInt(value);
            if (isNaN(v))
                v = 0;
            if (v > max)
                v = max;
            return v;
        };
        _this.handleChangeDegrees = function (value) {
            _this.updateDMS = true;
            _this.props.onChange(_this.toFloat(_this.forceRange(value, 180), _this.getMinutes(), _this.getSeconds(), _this.getSign()));
        };
        _this.handleChangeMinutes = function (value) {
            _this.updateDMS = true;
            _this.props.onChange(_this.toFloat(_this.getDegrees(), _this.forceRange(value, 59), _this.getSeconds(), _this.getSign()));
        };
        _this.handleChangeSeconds = function (value) {
            _this.updateDMS = true;
            _this.props.onChange(_this.toFloat(_this.getDegrees(), _this.getMinutes(), _this.forceRange(value, 59), _this.getSign()));
        };
        _this.handleChangeSign = function () {
            _this.updateDMS = true;
            _this.props.onChange(_this.toFloat(_this.getDegrees(), _this.getMinutes(), _this.getSeconds(), _this.getSign() == 1 ? -1 : 1));
        };
        _this.handleChangeValue = function (value) {
            _this.props.onChange(value);
        };
        _this.getValue = function () {
            if (_this.updateDMS) {
                _this.updateDMS = false;
                return _this.props.value.toFixed(6);
            }
            else {
                return _this.props.value;
            }
        };
        return _this;
    }
    DmsInputBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement(DegreesHolder, null,
                React.createElement(Input, { type: "text", maxLength: 4, fluid: true, value: this.getDegrees(), transparent: true, error: p.error || (this.getDegrees() < -90 && p.isLatitude) || this.getDegrees() < -180 || (this.getDegrees() > 90 && p.isLatitude) || this.getDegrees() > 180, disabled: p.disabled, onChange: this.handleChangeDegrees })),
            React.createElement(MinutesHolder, null,
                React.createElement(Input, { type: "text", maxLength: 2, fluid: true, value: this.getMinutes(), transparent: true, error: p.error || this.getMinutes() < 0 || this.getMinutes() > 59, disabled: p.disabled, onChange: this.handleChangeMinutes })),
            React.createElement(SecondsHolder, null,
                React.createElement(Input, { type: "text", maxLength: 2, fluid: true, value: this.getSeconds(), transparent: true, error: p.error || this.getSeconds() < 0 || this.getSeconds() > 59, disabled: p.disabled, onChange: this.handleChangeSeconds },
                    React.createElement(Label, { attached: "right", onClick: this.handleChangeSign },
                        React.createElement("div", { style: { width: '10px', userSelect: 'none' } }, this.getSign() == 1 ? (p.isLatitude ? 'N' : 'E') : (p.isLatitude ? 'S' : 'W'))))),
            React.createElement(FloatHolder, null,
                React.createElement(Input, { type: "text", fluid: true, value: this.getValue(), transparent: true, error: p.error, disabled: p.disabled, onChange: this.handleChangeValue }))));
    };
    return DmsInputBase;
}(React.Component));
var DegreesHolder = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 63px;\n  &::before {\n    position: absolute;\n    top: 7px;\n    right: 6px;\n    z-index: 99;\n    content: '\\ba';   // &ordm;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 63px;\n  &::before {\n    position: absolute;\n    top: 7px;\n    right: 6px;\n    z-index: 99;\n    content: '\\\\ba';   // &ordm;\n  }\n"])));
var MinutesHolder = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 46px;\n  &::before {\n    position: absolute;\n    top: 7px;\n    right: 8px;\n    z-index: 99;\n    content: '\\2032'; // &prime;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 46px;\n  &::before {\n    position: absolute;\n    top: 7px;\n    right: 8px;\n    z-index: 99;\n    content: '\\\\2032'; // &prime;\n  }\n"])));
var SecondsHolder = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  &::before {\n    position: absolute;\n    top: 7px;\n    right: 40px;\n    z-index: 99;\n    content: '\\2033';   // &ordm;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  &::before {\n    position: absolute;\n    top: 7px;\n    right: 40px;\n    z-index: 99;\n    content: '\\\\2033';   // &ordm;\n  }\n"])));
var FloatHolder = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  width: 135px;\n"], ["\n  display: inline-block;\n  width: 135px;\n"])));
var DmsInputStyled = styled(DmsInputBase)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-block;\n  white-space: nowrap;\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  transition: border-color ", "s ease;\n  &:focus-within { \n    border-color: ", ";  \n  }\n  input {\n    text-align: right;\n  }\n  /* Make sure Label doesn't have any border radius: */\n  ", " {\n    border-radius: 0;\n  }\n"], ["\n  display: inline-block;\n  white-space: nowrap;\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  transition: border-color ", "s ease;\n  &:focus-within { \n    border-color: ", ";  \n  }\n  input {\n    text-align: right;\n  }\n  /* Make sure Label doesn't have any border radius: */\n  ", " {\n    border-radius: 0;\n  }\n"])), function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.transition.duration; }, function (p) { return lighten(0.25, p.theme.primaryColor); }, LabelStyled);
var DmsInput = /** @class */ (function (_super) {
    __extends(DmsInput, _super);
    function DmsInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(DmsInputStyled, __assign({}, _this.props)); };
        return _this;
    }
    return DmsInput;
}(React.Component));
export { DmsInput };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
