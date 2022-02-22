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
import { Input } from '../Input';
import { Button } from '../../Button';
import { Clock } from './Clock';
import { Label } from '../../Label';
var SelectorBase = /** @class */ (function (_super) {
    __extends(SelectorBase, _super);
    function SelectorBase(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            // On mount, focus on first input (hours).
            _this.wrapperElement.querySelector('input').focus();
            _this.wrapperElement.querySelector('input').select();
        };
        // Cancel and close control
        _this.handleCancel = function (e) {
            if (e)
                e.stopPropagation();
            _this.props.onSelect(null);
        };
        // Select a time and update the input's value.
        _this.handleSelect = function (e) {
            if (e)
                e.stopPropagation();
            var hour = _this.state.hour;
            if (!_this.props.is24h && hour == 12)
                hour = 0;
            if (!_this.props.is24h && !_this.state.am)
                hour += 12;
            var date = new Date(1, 1, 1, hour, _this.state.minute, _this.state.second);
            _this.props.onSelect(format(date, 'HH:mm:ss'));
        };
        _this.getMinHour = function () {
            return _this.props.is24h ? 0 : 1;
        };
        _this.getMaxHour = function () {
            return _this.props.is24h ? 24 : 13;
        };
        // Is the currently selected time a valid time?
        _this.isValid = function () {
            return _this.state.hour != null && _this.state.hour >= _this.getMinHour() && _this.state.hour < _this.getMaxHour()
                && _this.state.minute != null && _this.state.minute >= 0 && _this.state.minute < 60
                && _this.state.second != null && _this.state.second >= 0 && _this.state.second < 60;
        };
        // Force a value into a 0..max (exclusive) range.
        _this.forceRange = function (value, min, max) {
            value = parseInt(value);
            if (isNaN(value))
                value = min;
            if (value < min)
                return min;
            if (value >= max)
                return max - 1;
            return value;
        };
        _this.handleHour = function (value) {
            _this.setState({ hour: _this.forceRange(value, _this.getMinHour(), _this.getMaxHour()) });
        };
        _this.handleMinute = function (value) {
            _this.setState({ minute: _this.forceRange(value, 0, 60) });
        };
        _this.handleSecond = function (value) {
            _this.setState({ second: _this.forceRange(value, 0, 60) });
        };
        _this.handleAM = function () {
            _this.setState({ am: true });
        };
        _this.handlePM = function () {
            _this.setState({ am: false });
        };
        _this.handleClock = function (degrees, done) {
            var value;
            switch (_this.state.mode) {
                case 'hour':
                    value = Math.round(degrees / 30);
                    if (_this.props.is24h)
                        value = Math.round(degrees / 15);
                    value = value % _this.getMaxHour();
                    _this.setState({ hour: _this.forceRange(value, _this.getMinHour(), _this.getMaxHour()) });
                    if (done) {
                        _this.wrapperElement.querySelectorAll('input')[1].focus();
                        _this.wrapperElement.querySelectorAll('input')[1].select();
                    }
                    else {
                        _this.wrapperElement.querySelectorAll('input')[0].focus();
                        _this.wrapperElement.querySelectorAll('input')[0].select();
                    }
                    break;
                case 'minute':
                    value = Math.round(degrees / 6) % 60;
                    _this.setState({ minute: _this.forceRange(value, 0, 60) });
                    if (done && _this.props.hasSeconds) {
                        _this.wrapperElement.querySelectorAll('input')[2].focus();
                        _this.wrapperElement.querySelectorAll('input')[2].select();
                    }
                    else {
                        _this.wrapperElement.querySelectorAll('input')[1].focus();
                        _this.wrapperElement.querySelectorAll('input')[1].select();
                    }
                    break;
                case 'second':
                    value = Math.round(degrees / 6) % 60;
                    _this.setState({ second: _this.forceRange(value, 0, 60) });
                    _this.wrapperElement.querySelectorAll('input')[2].focus();
                    _this.wrapperElement.querySelectorAll('input')[2].select();
                    break;
            }
        };
        _this.getClockValue = function () {
            switch (_this.state.mode) {
                case 'hour':
                    return _this.state.hour * (_this.props.is24h ? 15 : 30);
                case 'minute':
                    return _this.state.minute * 6;
                case 'second':
                    return _this.state.second * 6;
            }
        };
        _this.handleKeyDown = function (e) {
            if (e.key == 'Enter' && _this.isValid())
                _this.handleSelect();
            if (e.key == 'Escape')
                _this.handleCancel();
        };
        var time = _this.props.value ? parse(_this.props.value, "HH:mm:ss", new Date()) : null;
        var hour = time ? time.getHours() % (_this.props.is24h ? 24 : 12) : null;
        if (!props.is24h && hour == 0)
            hour = 12;
        _this.state = {
            mode: 'hour',
            hour: hour,
            minute: time ? time.getMinutes() : null,
            // If we have no seconds, just set them to 0.
            second: props.hasSeconds ? (time ? time.getSeconds() : null) : 0,
            am: time ? time.getHours() < 12 : true
        };
        return _this;
    }
    SelectorBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement(Body, { ref: function (el) { return _this.wrapperElement = el; }, onKeyDown: this.handleKeyDown },
                React.createElement(ControlBar, null,
                    React.createElement(InputBar, null,
                        React.createElement(InputHolder, null,
                            React.createElement(Input, { onFocus: function () { return _this.setState({ mode: "hour" }); }, transparent: true, fluid: true, maxLength: 2, value: this.state.hour, placeholder: "HH", onChange: this.handleHour })),
                        React.createElement(InputHolder, null,
                            React.createElement(Input, { onFocus: function () { return _this.setState({ mode: "minute" }); }, transparent: true, fluid: true, maxLength: 2, value: this.state.minute, placeholder: "mm", onChange: this.handleMinute })),
                        p.hasSeconds &&
                            React.createElement(InputHolder, null,
                                React.createElement(Input, { onFocus: function () { return _this.setState({ mode: "second" }); }, transparent: true, fluid: true, maxLength: 2, value: this.state.second, placeholder: "ss", onChange: this.handleSecond }))),
                    !p.is24h && React.createElement(React.Fragment, null,
                        React.createElement(Label, { color: this.state.am ? "#000" : null, attached: "right", onClick: this.handleAM }, "AM"),
                        React.createElement(Label, { color: !this.state.am ? "#000" : null, attached: "right", onClick: this.handlePM }, "PM"))),
                p.clock && React.createElement(React.Fragment, null,
                    React.createElement("div", { style: { height: '16px' } }),
                    React.createElement(Clock, { mode: this.state.mode, is24h: this.props.is24h, onSelect: this.handleClock, degrees: this.getClockValue() }))),
            React.createElement(Footer, null,
                React.createElement(Button, { disabled: !this.isValid(), primary: true, onClick: this.handleSelect }, "Select"),
                React.createElement(Button, { secondary: true, onClick: this.handleCancel }, "Cancel"))));
    };
    return SelectorBase;
}(React.Component));
var Body = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 14px;\n  text-align: center;\n"], ["\n  position: relative;\n  padding: 14px;\n  text-align: center;\n"])));
// Footer contains Select and Cancel buttons:
var Footer = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 10px;\n  text-align: right;\n  border-top: solid 1px ", ";\n  background: ", ";    \n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n"], ["\n  padding: 10px;\n  text-align: right;\n  border-top: solid 1px ", ";\n  background: ", ";    \n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n"
    // ControlBar aligns inputs and AM/PM labels in a row:
])), function (p) { return p.theme.normalColor; }, function (p) { return lighten(0.1, p.theme.normalColor); }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; });
// ControlBar aligns inputs and AM/PM labels in a row:
var ControlBar = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  transition: border-color ", "s ease;\n  &:focus-within { \n    border-color: ", ";  \n  }\n"], ["\n  display: inline-flex;\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  transition: border-color ", "s ease;\n  &:focus-within { \n    border-color: ", ";  \n  }\n"
    // InputBar aligns inputs in a row. These are in a div of their
    // own so that we can do last-child on them.
])), function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.transition.duration; }, function (p) { return lighten(0.25, p.theme.primaryColor); });
// InputBar aligns inputs in a row. These are in a div of their
// own so that we can do last-child on them.
var InputBar = styled('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-flex;\n"], ["\n  display: inline-flex;\n"
    // Wraps an input, adding ":" after it.
])));
// Wraps an input, adding ":" after it.
var InputHolder = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  width: 59px;\n  &:not(:last-child):after {\n    content: ':';\n    position: absolute;\n    z-index: 1;\n    right: -8px;\n    top: 6px;\n  }\n  input {\n    text-align: right;\n  }\n"], ["\n  position: relative;\n  width: 59px;\n  &:not(:last-child):after {\n    content: ':';\n    position: absolute;\n    z-index: 1;\n    right: -8px;\n    top: 6px;\n  }\n  input {\n    text-align: right;\n  }\n"])));
var Selector = styled(SelectorBase)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  width: 302px;\n  box-sizing: border-box;\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  cursor: auto; /* Unset cursor set by parent input */\n  color: ", "; /* Unset color set by parent input */\n\n  /* Positioning. */\n  z-index: 99; /* Must be positioned over everything else */\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &.fade-enter {\n    opacity: 0.01;\n    transform: scale(0.01);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 300ms ease-out;\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0.01;\n    transform: scale(0.01);\n    transition: all 300ms ease-in;\n  }\n"], ["\n  position: absolute;\n  width: 302px;\n  box-sizing: border-box;\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  cursor: auto; /* Unset cursor set by parent input */\n  color: ", "; /* Unset color set by parent input */\n\n  /* Positioning. */\n  z-index: 99; /* Must be positioned over everything else */\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &.fade-enter {\n    opacity: 0.01;\n    transform: scale(0.01);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 300ms ease-out;\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0.01;\n    transform: scale(0.01);\n    transition: all 300ms ease-in;\n  }\n"])), function (p) { return p.theme.background; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.fontColor; }, function (p) { return p.right && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["right: 0;"], ["right: 0;"]))); }, function (p) { return !p.right && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["left: 0;"], ["left: 0;"]))); }, function (p) { return p.upward && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["bottom: 42px;"], ["bottom: 42px;"]))); }, function (p) { return !p.upward && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["top: 42px;"], ["top: 42px;"]))); }, function (p) { return p.right && p.upward && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["transform-origin: bottom right;"], ["transform-origin: bottom right;"]))); }, function (p) { return !p.right && p.upward && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["transform-origin: bottom left;"], ["transform-origin: bottom left;"]))); }, function (p) { return p.right && !p.upward && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["transform-origin: top right;"], ["transform-origin: top right;"]))); }, function (p) { return !p.right && !p.upward && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["transform-origin: top left;"], ["transform-origin: top left;"]))); });
export { Selector };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
