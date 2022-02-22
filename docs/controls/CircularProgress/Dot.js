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
var DotBase = /** @class */ (function (_super) {
    __extends(DotBase, _super);
    function DotBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DotBase.prototype.render = function () {
        return React.createElement("div", { className: this.props.className });
    };
    return DotBase;
}(React.Component));
var Dot = styled(DotBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: ", "px;\n  top: ", "px;\n  width: ", "px;\n  height: ", "px;\n  transform: translateX(-50%) translateY(-50%);\n  background: ", ";\n  border-radius: 50%;\n"], ["\n  position: absolute;\n  left: ", "px;\n  top: ", "px;\n  width: ", "px;\n  height: ", "px;\n  transform: translateX(-50%) translateY(-50%);\n  background: ", ";\n  border-radius: 50%;\n"])), function (p) { return p.left; }, function (p) { return p.top; }, function (p) { return p.thickness; }, function (p) { return p.thickness; }, function (p) { return p.color ? p.color : p.theme.primaryColor; });
export { Dot };
var templateObject_1;
