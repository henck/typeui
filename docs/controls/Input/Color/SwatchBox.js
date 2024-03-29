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
import styled from '../../../styles/Theme';
// Other controls
import { Swatch } from './Swatch';
var WIDTH = 50;
var HEIGHT = 276;
var SwatchBoxBase = /** @class */ (function (_super) {
    __extends(SwatchBoxBase, _super);
    function SwatchBoxBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwatchBoxBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { className: p.className }, p.swatches.map(function (swatch, i) {
            return React.createElement(Swatch, { key: i, color: swatch.color, locked: swatch.locked, onClick: _this.props.onClick.bind(_this, i), onToggle: _this.props.onToggle.bind(_this, i) });
        })));
    };
    return SwatchBoxBase;
}(React.Component));
var SwatchBox = styled(SwatchBoxBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  flex-direction: column;\n"], ["\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n  flex-direction: column;\n"])), WIDTH, HEIGHT);
export { SwatchBox };
var templateObject_1;
