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
var BoxBase = /** @class */ (function (_super) {
    __extends(BoxBase, _super);
    function BoxBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return BoxBase;
}(React.Component));
var BoxStyled = styled(BoxBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  padding: 30px;\n  text-align: center;\n  border-radius: 2px;\n  ", "\n  ", "\n"], ["\n  display: block;\n  padding: 30px;\n  text-align: center;\n  border-radius: 2px;\n  ", "\n  ", "\n"])), function (p) { return !p.color && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["background: pink;"], ["background: pink;"]))); }, function (p) { return p.color && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["background: ", ";"], ["background: ", ";"])), p.color); });
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.render = function () {
        var p = this.props;
        return (React.createElement(BoxStyled, __assign({}, p)));
    };
    return Box;
}(React.Component));
export { Box };
var templateObject_1, templateObject_2, templateObject_3;
