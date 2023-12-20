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
var BoxBase = function (props) {
    return React.createElement("div", { className: props.className }, props.children);
};
var BoxStyled = styled(BoxBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  padding: 30px;\n  text-align: center;\n  border-radius: 2px;\n  ", "\n  ", "\n"], ["\n  display: block;\n  padding: 30px;\n  text-align: center;\n  border-radius: 2px;\n  ", "\n  ", "\n"])), function (p) { return !p.color && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["background: pink;"], ["background: pink;"]))); }, function (p) { return p.color && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["background: ", ";"], ["background: ", ";"])), p.color); });
var Box = function (props) { return React.createElement(BoxStyled, __assign({}, props)); };
export { Box };
var templateObject_1, templateObject_2, templateObject_3;
