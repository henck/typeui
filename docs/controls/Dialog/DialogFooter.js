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
// Helpers
import { lighten } from '../../helper/lighten';
var DialogFooterBase = function (props) {
    return React.createElement("div", { className: props.className }, props.children);
};
var DialogFooterStyled = styled(DialogFooterBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: ", ";\n  padding: 20px 20px 20px 20px;\n  border-top: solid 1px ", ";\n  background: ", ";\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: ", ";\n  padding: 20px 20px 20px 20px;\n  border-top: solid 1px ", ";\n  background: ", ";\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n"])), function (p) { var _a; return (_a = p.align) !== null && _a !== void 0 ? _a : 'end'; }, function (p) { return p.theme.normalColor; }, function (p) { return lighten(0.1, p.theme.normalColor); }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; });
var DialogFooter = function (props) {
    return React.createElement(DialogFooterStyled, __assign({}, props));
};
DialogFooter.displayName = "Dialog.Footer";
export { DialogFooter };
var templateObject_1;
