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
var LabelGroupBase = /** @class */ (function (_super) {
    __extends(LabelGroupBase, _super);
    function LabelGroupBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelGroupBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        // Clone all the children, adding group props to each (but
        // only if the child doesn't override them).
        return (React.createElement("div", { className: p.className }, React.Children.map(p.children, function (child) {
            return React.cloneElement(child, {
                basic: child.props.basic ? child.props.basic : _this.props.basic,
                color: child.props.color ? child.props.color : _this.props.color,
                pointing: child.props.pointing ? child.props.pointing : _this.props.pointing,
                size: child.props.size ? child.props.size : _this.props.size,
                tag: child.props.tag ? child.props.tag : _this.props.tag
            });
        })));
    };
    return LabelGroupBase;
}(React.Component));
var LabelGroupStyled = styled(LabelGroupBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var LabelGroup = /** @class */ (function (_super) {
    __extends(LabelGroup, _super);
    function LabelGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(LabelGroupStyled, __assign({}, _this.props)); };
        return _this;
    }
    return LabelGroup;
}(React.Component));
export { LabelGroup };
var templateObject_1;
