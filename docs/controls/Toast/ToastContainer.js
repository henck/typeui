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
import { css } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Other controls
import { Toast } from './Toast';
import { ToastService } from './ToastService';
var ToastContainerBase = /** @class */ (function (_super) {
    __extends(ToastContainerBase, _super);
    function ToastContainerBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTimeout = function (key) {
            // Remove messsage by key:    
            _this.setState(function (prevState) {
                var messages = prevState.messages;
                delete messages[key];
                return {
                    messages: messages
                };
            });
        };
        ToastService.subscribe(_this);
        _this.state = {
            messages: {}
        };
        return _this;
    }
    // Add a new toast. This is called by ToastService.
    ToastContainerBase.prototype.toast = function (message, duration) {
        var _this = this;
        this.setState(function (prevState) {
            var messages = prevState.messages;
            // Remove excess messages:
            while (Object.keys(messages).length >= _this.props.maxToasts) {
                delete messages[Object.keys(messages)[0]];
            }
            // Create new message:
            var key = new Date().getTime().toString();
            messages[key] = {
                message: message,
                duration: duration
            };
            // Set new state:
            return {
                messages: messages
            };
        });
    };
    ToastContainerBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement(TransitionGroup, null, Object.keys(this.state.messages).map(function (key) {
                return React.createElement(CSSTransition, { key: key, timeout: 500, classNames: "item" },
                    React.createElement(Toast, { message: _this.state.messages[key].message, duration: _this.state.messages[key].duration, onTimeout: function () { return _this.handleTimeout(key); } }));
            }))));
    };
    return ToastContainerBase;
}(React.Component));
var ToastContainerStyled = styled(ToastContainerBase)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 9999;\n  /* \n   * Toasts are placed in the bottom-left corner, unless placement\n   * is overridden. \n   */\n  ", ";\n  ", ";\n"], ["\n  position: absolute;\n  z-index: 9999;\n  /* \n   * Toasts are placed in the bottom-left corner, unless placement\n   * is overridden. \n   */\n  ", ";\n  ", ";\n"])), function (p) { return p.horizontalAlign == 'right' ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["right: ", "px"], ["right: ", "px"])), p.horizontalOffset ? p.horizontalOffset : 20) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["left: ", "px"], ["left: ", "px"])), p.horizontalOffset ? p.horizontalOffset : 20); }, function (p) { return p.verticalAlign == 'top' ? css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["top: ", "px"], ["top: ", "px"])), p.verticalOffset ? p.verticalOffset : 20) : css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["bottom: ", "px"], ["bottom: ", "px"])), p.verticalOffset ? p.verticalOffset : 20); });
var ToastContainer = /** @class */ (function (_super) {
    __extends(ToastContainer, _super);
    function ToastContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(ToastContainerStyled, __assign({}, _this.props)); };
        return _this;
    }
    return ToastContainer;
}(React.Component));
export { ToastContainer };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
