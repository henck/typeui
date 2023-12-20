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
var DialogContentBase = function (props) {
    return React.createElement("div", { className: props.className }, props.children);
};
var DialogContentStyled = styled(DialogContentBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position:   relative;\n  padding:    20px 20px 20px 20px;\n  max-height: ", "vh;\n  overflow-y: auto;  \n"], ["\n  position:   relative;\n  padding:    20px 20px 20px 20px;\n  max-height: ", "vh;\n  overflow-y: auto;  \n"])), function (p) { var _a; return (_a = p.maxHeight) !== null && _a !== void 0 ? _a : 70; });
var DialogContent = function (props) {
    return React.createElement(DialogContentStyled, __assign({}, props));
};
DialogContent.displayName = "Dialog.Content";
export { DialogContent };
var templateObject_1;
