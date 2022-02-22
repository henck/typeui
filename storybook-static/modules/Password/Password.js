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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { Input } from '../../controls/Input';
/*
 * The Password module combines an Input component and an Icon
 * component to make a password input with an eye icon that can
 * be clicked to toggle password visibility.
 *
 * This is achieved by toggling the Input’s type property between
 * password and text.
 */
var Password = /** @class */ (function (_super) {
    __extends(Password, _super);
    function Password(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            _this.setState({ visible: !_this.state.visible });
        };
        _this.state = {
            visible: false
        };
        return _this;
    }
    Password.prototype.render = function () {
        var _a = this.props, type = _a.type, otherProps = __rest(_a, ["type"]);
        return (React.createElement(Input, __assign({}, otherProps, { type: this.state.visible ? 'text' : 'password', iconPosition: "right", icon: { name: this.state.visible ? 'eye' : 'eye-slash', onClick: this.handleClick } })));
    };
    return Password;
}(React.Component));
export { Password };
