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
var HintBase = /** @class */ (function (_super) {
    __extends(HintBase, _super);
    function HintBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HintBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.children));
    };
    return HintBase;
}(React.Component));
var Hint = styled(HintBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 80%;\n  line-height: 1.4em;\n  color: #aaa;\n  padding-top: 4px;\n  padding-left: 4px;\n"], ["\n  font-size: 80%;\n  line-height: 1.4em;\n  color: #aaa;\n  padding-top: 4px;\n  padding-left: 4px;\n"])));
export { Hint };
var templateObject_1;
