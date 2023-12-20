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
var DialogHeaderBase = function (props) {
    return React.createElement("div", { className: props.className }, props.children);
};
var DialogHeaderStyled = styled(DialogHeaderBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding:       20px 20px 15px 20px;\n  border-bottom: solid 1px ", ";\n  font-size:     24px;\n  font-weight:   500;\n"], ["\n  padding:       20px 20px 15px 20px;\n  border-bottom: solid 1px ", ";\n  font-size:     24px;\n  font-weight:   500;\n"])), function (p) { return p.theme.normalColor; });
var DialogHeader = function (props) {
    return React.createElement(DialogHeaderStyled, __assign({}, props));
};
DialogHeader.displayName = "Dialog.Header";
export { DialogHeader };
var templateObject_1;
