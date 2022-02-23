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
var ListHeaderBase = /** @class */ (function (_super) {
    __extends(ListHeaderBase, _super);
    function ListHeaderBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className }, _this.props.children); };
        return _this;
    }
    return ListHeaderBase;
}(React.Component));
/* Styling for list header. */
var ListHeaderStyled = styled(ListHeaderBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 500;\n  line-height: 1em;\n  padding-top: 4px;\n"], ["\n  font-weight: 500;\n  line-height: 1em;\n  padding-top: 4px;\n"])));
var ListHeader = /** @class */ (function (_super) {
    __extends(ListHeader, _super);
    function ListHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(ListHeaderStyled, __assign({}, _this.props)); };
        return _this;
    }
    return ListHeader;
}(React.Component));
export { ListHeader };
var templateObject_1;
