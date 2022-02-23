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
var ImageGroupBase = /** @class */ (function (_super) {
    __extends(ImageGroupBase, _super);
    function ImageGroupBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageGroupBase.prototype.render = function () {
        var p = this.props;
        // Build a list of properties to pass along to child images.
        var props = {};
        if (p.size)
            props.size = p.size;
        if (p.bordered)
            props.bordered = p.bordered;
        if (p.rounded)
            props.rounded = p.rounded;
        if (p.circular)
            props.circular = p.circular;
        return (React.createElement("div", { className: p.className }, React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, props);
        })));
    };
    return ImageGroupBase;
}(React.Component));
/* Styling for Image Group. */
var ImageGroupStyled = styled(ImageGroupBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  & > *:not(:first-child) {\n    margin-left: 10px;\n  }\n"], ["\n  display: flex;\n  & > *:not(:first-child) {\n    margin-left: 10px;\n  }\n"])));
var ImageGroup = /** @class */ (function (_super) {
    __extends(ImageGroup, _super);
    function ImageGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(ImageGroupStyled, __assign({}, _this.props)); };
        return _this;
    }
    return ImageGroup;
}(React.Component));
export { ImageGroup };
var templateObject_1;
