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
var SliderBase = /** @class */ (function (_super) {
    __extends(SliderBase, _super);
    function SliderBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className, style: { height: (p.heightInItems * ITEM_HEIGHT) + "px" } }, p.children));
    };
    return SliderBase;
}(React.Component));
var ITEM_HEIGHT = 57;
var Slider = styled(SliderBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  /* Draw repeating empty rows in background */\n  background-size: 100% ", "px;\n  background-image: linear-gradient(to bottom, ", " 56px, ", " 1px);\n"], ["\n  position: relative;\n  /* Draw repeating empty rows in background */\n  background-size: 100% ", "px;\n  background-image: linear-gradient(to bottom, ", " 56px, ", " 1px);\n"])), ITEM_HEIGHT, function (p) { return p.theme.background; }, function (p) { return p.theme.normalColor; });
export { Slider };
var templateObject_1;
