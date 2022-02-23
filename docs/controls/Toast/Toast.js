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
// Other controls
import { Icon } from '../Icon/Icon';
import { IconStyled } from '../Icon/Icon';
;
/**
 * Toasts can be clicked to self-close. Otherwise they self-close
 * after a duration in milliseconds.
 */
var ToastBase = /** @class */ (function (_super) {
    __extends(ToastBase, _super);
    function ToastBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            _this.props.onTimeout();
        };
        // Set a timeout on the toast, saving the
        // timer handle for later cleanup.
        _this.timerHandle = window.setTimeout(function () {
            _this.props.onTimeout();
        }, _this.props.duration ? _this.props.duration : 8000);
        return _this;
    }
    // Clear any running timer:
    ToastBase.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.timerHandle);
    };
    ToastBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, onClick: this.handleClick },
            React.createElement(Icon, { name: "bullhorn", color: "#fff" }),
            React.createElement("div", null, p.message)));
    };
    return ToastBase;
}(React.Component));
var ToastStyled = styled(ToastBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n  align-items: center;\n  background: #000;\n  color: #fff;\n  padding: 8px 16px;\n  border-radius: ", "px;\n  margin-top: 8px;\n  cursor: pointer;\n\n  & > ", " {\n    margin-right: 10px;\n  }\n\n  /* CSSTransition classes */\n  &.item-enter {\n    opacity: 0;\n    transform: translateX(-150%);\n  }\n  &.item-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity ", "s ease-in-out, \n                transform ", "s ease-in-out;\n  }\n  &.item-exit {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  &.item-exit-active {\n    opacity: 0;\n    transform: translateX(-150%);\n    transition: opacity ", "s ease-in-out, \n                transform ", "s ease-in-out;\n  }  \n"], ["\n  display: flex;\n  align-items: flex-start;\n  align-items: center;\n  background: #000;\n  color: #fff;\n  padding: 8px 16px;\n  border-radius: ", "px;\n  margin-top: 8px;\n  cursor: pointer;\n\n  & > ", " {\n    margin-right: 10px;\n  }\n\n  /* CSSTransition classes */\n  &.item-enter {\n    opacity: 0;\n    transform: translateX(-150%);\n  }\n  &.item-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity ", "s ease-in-out, \n                transform ", "s ease-in-out;\n  }\n  &.item-exit {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  &.item-exit-active {\n    opacity: 0;\n    transform: translateX(-150%);\n    transition: opacity ", "s ease-in-out, \n                transform ", "s ease-in-out;\n  }  \n"])), function (p) { return p.theme.radius; }, IconStyled, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; }, function (p) { return p.theme.transition.duration * 3; });
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(ToastStyled, __assign({}, _this.props)); };
        return _this;
    }
    return Toast;
}(React.Component));
export { Toast };
var templateObject_1;
