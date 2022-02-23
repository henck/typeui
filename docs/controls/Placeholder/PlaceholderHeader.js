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
var PlaceholderHeaderBase = /** @class */ (function (_super) {
    __extends(PlaceholderHeaderBase, _super);
    function PlaceholderHeaderBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement("div", { className: _this.props.className }, _this.props.children); };
        return _this;
    }
    return PlaceholderHeaderBase;
}(React.Component));
var PlaceholderHeaderStyled = styled(PlaceholderHeaderBase)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  background: transparent;\n  border-top: solid 1px #fff;\n  \n  /* Separator between image and lines */\n  ", "\n\n  /* White block under lines */\n  padding-bottom: 12px;\n  &:after {\n    position: absolute;\n    z-index: 1;\n    content: '';\n    left: 0;\n    bottom: 0;\n    height: 12px;\n    right: 0;\n    background: #fff;\n  }\n"], ["\n  position: relative;\n  background: transparent;\n  border-top: solid 1px #fff;\n  \n  /* Separator between image and lines */\n  ", "\n\n  /* White block under lines */\n  padding-bottom: 12px;\n  &:after {\n    position: absolute;\n    z-index: 1;\n    content: '';\n    left: 0;\n    bottom: 0;\n    height: 12px;\n    right: 0;\n    background: #fff;\n  }\n"])), function (p) { return p.image && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-left: 54px;\n    &:before {\n      position: absolute;\n      z-index: 1;\n      content: '';\n      left: -10px;\n      top: -1px;\n      bottom: 0;\n      width: 10px;\n      background: #fff;\n    }\n  "], ["\n    margin-left: 54px;\n    &:before {\n      position: absolute;\n      z-index: 1;\n      content: '';\n      left: -10px;\n      top: -1px;\n      bottom: 0;\n      width: 10px;\n      background: #fff;\n    }\n  "]))); });
var PlaceholderHeader = /** @class */ (function (_super) {
    __extends(PlaceholderHeader, _super);
    function PlaceholderHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () { return React.createElement(PlaceholderHeaderStyled, __assign({}, _this.props)); };
        return _this;
    }
    return PlaceholderHeader;
}(React.Component));
export { PlaceholderHeader };
var templateObject_1, templateObject_2;
