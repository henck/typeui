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
var UnderlinerBase = /** @class */ (function (_super) {
    __extends(UnderlinerBase, _super);
    function UnderlinerBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnderlinerBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, ref: p.setRef }));
    };
    return UnderlinerBase;
}(React.Component));
var Underliner = styled(UnderlinerBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: 38px;\n  width: 0px;\n  height: 0px;\n  border-top: solid 2px ", ";\n  box-sizing: border-box;\n  transition: left ease .3s, width ease .3s;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 38px;\n  width: 0px;\n  height: 0px;\n  border-top: solid 2px ", ";\n  box-sizing: border-box;\n  transition: left ease .3s, width ease .3s;\n"])), function (p) { return p.theme.primaryColor; });
export { Underliner };
var templateObject_1;
