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
// Helpers
import { lighten } from '../../helper/lighten';
var DialogFooterBase = /** @class */ (function (_super) {
    __extends(DialogFooterBase, _super);
    function DialogFooterBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogFooterBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return DialogFooterBase;
}(React.Component));
var DialogFooterStyled = styled(DialogFooterBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px 20px 20px 20px;\n  border-top: solid 1px ", ";\n  background: ", ";\n  text-align: right;\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n"], ["\n  padding: 20px 20px 20px 20px;\n  border-top: solid 1px ", ";\n  background: ", ";\n  text-align: right;\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n"])), function (p) { return p.theme.normalColor; }, function (p) { return lighten(0.1, p.theme.normalColor); }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; });
var DialogFooter = /** @class */ (function (_super) {
    __extends(DialogFooter, _super);
    function DialogFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogFooter.prototype.render = function () {
        var p = this.props;
        return (React.createElement(DialogFooterStyled, __assign({}, p)));
    };
    DialogFooter.displayName = "Dialog.Footer";
    return DialogFooter;
}(React.Component));
export { DialogFooter };
var templateObject_1;
