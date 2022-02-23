var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import * as React from 'react';
import styled from '../../styles/Theme';
var FooterStyled = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 14px;\n  background: #f9f9f9;\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n"], ["\n  position: relative;\n  padding: 14px;\n  background: #f9f9f9;\n  border-bottom-left-radius: ", "px;\n  border-bottom-right-radius: ", "px;\n"])), function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; });
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.return = function () { return React.createElement(FooterStyled, null); };
        return _this;
    }
    return Footer;
}(React.Component));
export { Footer };
var templateObject_1;
