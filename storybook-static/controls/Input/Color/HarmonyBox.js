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
// Helpers
import { RgbColor } from '../../../helper/RgbColor';
import { HslColor } from '../../../helper/HslColor';
// Other controls
import { HarmonyElement } from './HarmonyElement';
var HarmonyBoxBase = /** @class */ (function (_super) {
    __extends(HarmonyBoxBase, _super);
    function HarmonyBoxBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HarmonyBoxBase.prototype.handleClick = function (color) {
        this.props.onClick(color);
    };
    HarmonyBoxBase.prototype.addDegrees = function (degrees) {
        this.hsl.hue += degrees;
        if (this.hsl.hue < 0)
            this.hsl.hue += 360;
        if (this.hsl.hue > 360)
            this.hsl.hue -= 360;
        this.colors.push(RgbColor.FromHsl(this.hsl).toString());
    };
    HarmonyBoxBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        this.hsl = new HslColor(p.hue, p.saturation, p.lightness);
        this.colors = [];
        switch (p.type) {
            case 'complementary':
                this.addDegrees(0);
                this.addDegrees(180);
                break;
            case 'triadic':
                this.addDegrees(0);
                this.addDegrees(120);
                this.addDegrees(120);
                break;
            case 'tetradic':
                this.addDegrees(0);
                this.addDegrees(180);
                this.addDegrees(60);
                this.addDegrees(180);
                break;
            case 'analogous':
                this.addDegrees(0);
                for (var i = 0; i < 5; i++)
                    this.addDegrees(30);
                break;
            case 'neutral':
                this.addDegrees(0);
                for (var i = 0; i < 5; i++)
                    this.addDegrees(15);
                break;
            case 'shades':
                var lightness = this.hsl.lightness;
                this.colors.push(RgbColor.FromHsl(this.hsl).toString());
                for (var i = 7; i >= 1; i--) {
                    this.hsl.lightness = lightness / 8 * i;
                    this.colors.push(RgbColor.FromHsl(this.hsl).toString());
                }
                break;
            case 'tints':
                var lightness = this.hsl.lightness;
                var diff = 1 - lightness;
                this.colors.push(RgbColor.FromHsl(this.hsl).toString());
                for (var i = 1; i <= 7; i++) {
                    this.hsl.lightness = lightness + (diff) / 8 * i;
                    this.colors.push(RgbColor.FromHsl(this.hsl).toString());
                }
                break;
        }
        return (React.createElement("div", { className: p.className }, this.colors.map(function (color, i) {
            return (React.createElement(HarmonyElement, { key: i, color: color, onClick: _this.handleClick.bind(_this, color) }));
        })));
    };
    return HarmonyBoxBase;
}(React.Component));
var HarmonyBox = styled(HarmonyBoxBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
export { HarmonyBox };
var templateObject_1;
