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
import * as React from 'react';
import styled from '../../styles/Theme';
// Helpers
import { lighten } from '../../helper/lighten';
var ErrorBase = /** @class */ (function (_super) {
    __extends(ErrorBase, _super);
    function ErrorBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return ErrorBase;
}(React.Component));
var Error = styled(ErrorBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 80%;\n  line-height: 1.4em;\n  padding-top: 4px;\n  padding-left: 4px;\n"], ["\n  color: ", ";\n  font-size: 80%;\n  line-height: 1.4em;\n  padding-top: 4px;\n  padding-left: 4px;\n"])), function (p) { return p.contrast ? lighten(0.3, p.theme.errorColor.color) : p.theme.errorColor.color; });
export { Error };
var templateObject_1;
