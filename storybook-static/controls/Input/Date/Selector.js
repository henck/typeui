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
import { parseISO, format } from 'date-fns';
// Helpers
import { lighten } from '../../../helper/lighten';
// Other controls
import { Day } from './Day';
var SelectorBase = /** @class */ (function (_super) {
    __extends(SelectorBase, _super);
    function SelectorBase(props) {
        var _this = _super.call(this, props) || this;
        // 
        // Moves current view by specified number of months.
        // 
        _this.handleMove = function (months, e) {
            e.stopPropagation();
            _this.setState(function (prevState) {
                prevState.date.setMonth(prevState.date.getMonth() + months);
                return {
                    date: prevState.date
                };
            });
        };
        _this.handlePrevYear = function (e) { return _this.handleMove(-12, e); };
        _this.handleNextYear = function (e) { return _this.handleMove(12, e); };
        _this.handlePrevMonth = function (e) { return _this.handleMove(-1, e); };
        _this.handleNextMonth = function (e) { return _this.handleMove(1, e); };
        _this.handleCancel = function (e) {
            if (e)
                e.stopPropagation();
            _this.props.onSelect(null);
        };
        // Close control when Escape is pressed.
        _this.handleKeyDown = function (e) {
            if (e.key == 'Escape')
                _this.handleCancel();
        };
        // If no value is specified, use today's date.
        _this.state = {
            date: _this.props.value ? parseISO(_this.props.value) : new Date(Date.now()),
            selectedDate: _this.props.value ? parseISO(_this.props.value) : null
        };
        return _this;
    }
    // Listen for document-wide keydown event when component mounts.
    SelectorBase.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.handleKeyDown);
    };
    // Clean up document-wide keydown event when component unmounts.
    SelectorBase.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.handleKeyDown);
    };
    SelectorBase.prototype.handleDayClick = function (date, e) {
        e.stopPropagation();
        this.props.onSelect(format(date, 'yyyy-MM-dd'));
    };
    SelectorBase.prototype.render = function () {
        var p = this.props;
        // Save today's date.
        var today = new Date(Date.now());
        // Create a date for the first day of the month.
        var start = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 1);
        // Move backwards until it's a Monday.
        while (start.getDay() !== 1) {
            start.setDate(start.getDate() - 1);
        }
        // Create a date for the last day of the month.
        var month = this.state.date.getMonth() + 1;
        if (month > 12)
            month = 1;
        var end = new Date(this.state.date.getFullYear(), month, 0);
        // Move forward until it's a Sunday.
        while (end.getDay() !== 0) {
            end.setDate(end.getDate() + 1);
        }
        // There should be a total of 6x7 = 42 days. If a month starts 
        // exactly on Sunday we may be a week short. Add days until 
        // there are 42.
        var timeDiff = Math.abs(end.getTime() - start.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        for (var i = 0; i < 42 - diffDays; i++) {
            end.setDate(end.getDate() + 1);
        }
        // Build array of days.
        var days = [];
        while (start.getTime() < end.getTime()) {
            days.push(React.createElement(Day, { key: start.getTime(), grey: start.getMonth() != this.state.date.getMonth() || (p.nofuture && start > today), selected: this.state.selectedDate &&
                    this.state.selectedDate.getFullYear() === start.getFullYear() &&
                    this.state.selectedDate.getMonth() === start.getMonth() &&
                    this.state.selectedDate.getDate() === start.getDate(), today: today.getFullYear() === start.getFullYear() &&
                    today.getMonth() === start.getMonth() &&
                    today.getDate() === start.getDate(), day: start.getDate(), onClick: (!p.nofuture || start <= today) ? this.handleDayClick.bind(this, new Date(start.getTime())) : null }));
            start.setDate(start.getDate() + 1);
        }
        return (React.createElement("div", { className: p.className },
            React.createElement(Body, null,
                React.createElement(NavBar, null,
                    React.createElement(NavButton, { className: "left", onClick: this.handlePrevYear },
                        React.createElement("use", { xlinkHref: "spritemap.svg#chevron-double" })),
                    React.createElement(NavButton, { className: "left", onClick: this.handlePrevMonth },
                        React.createElement("use", { xlinkHref: "spritemap.svg#chevron" })),
                    React.createElement(NavLabel, null,
                        React.createElement(NavMonth, null, this.state.date.toLocaleString(undefined, { month: 'long' })),
                        React.createElement(NavYear, null, this.state.date.getFullYear())),
                    React.createElement(NavButton, { className: "right", onClick: this.handleNextMonth },
                        React.createElement("use", { xlinkHref: "spritemap.svg#chevron" })),
                    React.createElement(NavButton, { className: "right", onClick: this.handleNextYear },
                        React.createElement("use", { xlinkHref: "spritemap.svg#chevron-double" })),
                    React.createElement(NavButton, { className: "right", onClick: this.handleCancel },
                        React.createElement("use", { xlinkHref: "spritemap.svg#times" }))),
                React.createElement(Month, null,
                    ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(function (day, index) {
                        return React.createElement(DayName, { key: index }, day);
                    }),
                    days))));
    };
    return SelectorBase;
}(React.Component));
var NavButton = styled('svg')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: ", ";\n  flex-grow: 0;\n  width: 24px;\n  height: 13px;\n  cursor: pointer;\n  transition: transform ", "s ease,\n              fill ", "s ease;\n  &:hover { \n    fill: ", ";\n  }\n  &.left {\n    transform: scaleX(-1);  \n    &:hover {\n      transform: scaleX(-1.2) scaleY(1.2);\n    }  \n  }\n  &.right {\n    transform: scaleX(1);  \n    &:hover {\n      transform: scaleX(1.2) scaleY(1.2);\n    }  \n  }\n"], ["\n  fill: ", ";\n  flex-grow: 0;\n  width: 24px;\n  height: 13px;\n  cursor: pointer;\n  transition: transform ", "s ease,\n              fill ", "s ease;\n  &:hover { \n    fill: ", ";\n  }\n  &.left {\n    transform: scaleX(-1);  \n    &:hover {\n      transform: scaleX(-1.2) scaleY(1.2);\n    }  \n  }\n  &.right {\n    transform: scaleX(1);  \n    &:hover {\n      transform: scaleX(1.2) scaleY(1.2);\n    }  \n  }\n"])), function (p) { return lighten(0.3, p.theme.fontColor); }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.fontColor; });
var NavLabel = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  text-align: center;\n"], ["\n  flex: 1;\n  text-align: center;\n"])));
var NavMonth = styled('span')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: 4px;\n"], ["\n  margin-right: 4px;\n"])));
var NavYear = styled('span')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 500;  \n  margin-left: 4px;\n"], ["\n  font-weight: 500;  \n  margin-left: 4px;\n"])));
var NavBar = styled('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 8px 8px 8px 8px;\n  border-bottom: solid 1px ", ";\n  margin-bottom: 4px;\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 8px 8px 8px 8px;\n  border-bottom: solid 1px ", ";\n  margin-bottom: 4px;\n"])), function (p) { return p.theme.normalColor; });
var Body = styled('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Month = styled('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n"])));
var DayName = styled('div')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 40px;\n  text-align: center;\n  line-height: 30px; /* For vertical centering */  \n  font-size: 90%;\n  color: #aaa;\n  user-select: none;\n"], ["\n  width: 40px;\n  text-align: center;\n  line-height: 30px; /* For vertical centering */  \n  font-size: 90%;\n  color: #aaa;\n  user-select: none;\n"])));
var Selector = styled(SelectorBase)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  position: absolute;\n  width: 302px;\n  box-sizing: border-box;\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  cursor: auto; /* Unset cursor set by parent input */\n  color: ", "; /* Unset color set by parent input */\n\n  /* Positioning. */\n  z-index: 99; /* Must be positioned over everything else */\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &.fade-enter {\n    opacity: 0.01;\n    transform: scale(0.01);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 300ms ease-out;\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0.01;\n    transform: scale(0.01);\n    transition: all 300ms ease-in;\n  }\n"], ["\n  position: absolute;\n  width: 302px;\n  box-sizing: border-box;\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  cursor: auto; /* Unset cursor set by parent input */\n  color: ", "; /* Unset color set by parent input */\n\n  /* Positioning. */\n  z-index: 99; /* Must be positioned over everything else */\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &.fade-enter {\n    opacity: 0.01;\n    transform: scale(0.01);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 300ms ease-out;\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0.01;\n    transform: scale(0.01);\n    transition: all 300ms ease-in;\n  }\n"])), function (p) { return p.theme.background; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.fontColor; }, function (p) { return p.right && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["right: 0;"], ["right: 0;"]))); }, function (p) { return !p.right && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["left: 0;"], ["left: 0;"]))); }, function (p) { return p.upward && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["bottom: 42px;"], ["bottom: 42px;"]))); }, function (p) { return !p.upward && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["top: 42px;"], ["top: 42px;"]))); }, function (p) { return p.right && p.upward && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["transform-origin: bottom right;"], ["transform-origin: bottom right;"]))); }, function (p) { return !p.right && p.upward && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["transform-origin: bottom left;"], ["transform-origin: bottom left;"]))); }, function (p) { return p.right && !p.upward && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["transform-origin: top right;"], ["transform-origin: top right;"]))); }, function (p) { return !p.right && !p.upward && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["transform-origin: top left;"], ["transform-origin: top left;"]))); });
export { Selector };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
