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
var MetaBase = /** @class */ (function (_super) {
    __extends(MetaBase, _super);
    function MetaBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("span", { className: _this.props.className }, _this.props.children); };
        return _this;
    }
    return MetaBase;
}(React.Component));
var MetaStyled = styled(MetaBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  padding: 0 14px 0 14px;\n  font-size: 90%;\n  color: #888;\n  &:last-child {\n    padding-bottom: 12px;\n  }  \n"], ["\n  position: relative;\n  display: block;\n  padding: 0 14px 0 14px;\n  font-size: 90%;\n  color: #888;\n  &:last-child {\n    padding-bottom: 12px;\n  }  \n"])));
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(MetaStyled, __assign({}, _this.props)); };
        return _this;
    }
    return Meta;
}(React.Component));
export { Meta };
var templateObject_1;
