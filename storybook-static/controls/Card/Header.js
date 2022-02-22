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
import { css } from 'styled-components';
import styled from '../../styles/Theme';
var HeaderBase = /** @class */ (function (_super) {
    __extends(HeaderBase, _super);
    function HeaderBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("span", { className: p.className }, p.children));
    };
    return HeaderBase;
}(React.Component));
var HeaderStyled = styled(HeaderBase)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  padding: 14px 14px 0 14px;\n  font-size: 20px;\n  ", "\n  ", "    \n  ", "    \n  &:last-child {\n    padding-bottom: 12px;\n  }\n"], ["\n  position: relative;\n  display: block;\n  padding: 14px 14px 0 14px;\n  font-size: 20px;\n  ", "\n  ", "    \n  ", "    \n  &:last-child {\n    padding-bottom: 12px;\n  }\n"])), function (p) { return (!p.align || p.align == 'left') && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["text-align: left;"], ["text-align: left;"]))); }, function (p) { return p.align == 'center' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["text-align: center;"], ["text-align: center;"]))); }, function (p) { return p.align == 'right' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["text-align: right;"], ["text-align: right;"]))); });
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement(HeaderStyled, __assign({}, this.props)));
    };
    return Header;
}(React.Component));
export { Header };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
