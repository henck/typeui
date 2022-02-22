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
var WIDTH = 100;
var HEIGHT = 276;
var InfoBoxBase = /** @class */ (function (_super) {
    __extends(InfoBoxBase, _super);
    function InfoBoxBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function () {
            var color = RgbColor.FromHsl(new HslColor(_this.props.hue, _this.props.saturation, _this.props.lightness)).toString();
            _this.props.onClick(color);
        };
        _this.handleChangeHue = function (e) {
            var hue = _this.parseInteger(e.currentTarget.value, 359);
            var hsl = new HslColor(hue, _this.props.saturation, _this.props.lightness);
            var rgb = RgbColor.FromHsl(hsl).toString();
            _this.props.onChange(rgb);
        };
        _this.handleChangeSaturation = function (e) {
            var saturation = _this.parseInteger(e.currentTarget.value, 100) / 100;
            var hsl = new HslColor(_this.props.hue, saturation, _this.props.lightness);
            var rgb = RgbColor.FromHsl(hsl).toString();
            _this.props.onChange(rgb);
        };
        _this.handleChangeLightness = function (e) {
            var lightness = _this.parseInteger(e.currentTarget.value, 100) / 100;
            var hsl = new HslColor(_this.props.hue, _this.props.saturation, lightness);
            var rgb = RgbColor.FromHsl(hsl).toString();
            _this.props.onChange(rgb);
        };
        _this.handleChangeRed = function (e) {
            var red = _this.parseInteger(e.currentTarget.value, 255);
            var hsl = new HslColor(_this.props.hue, _this.props.saturation, _this.props.lightness);
            var rgb = RgbColor.FromHsl(hsl);
            rgb.red = red;
            _this.props.onChange(rgb.toString());
        };
        _this.handleChangeGreen = function (e) {
            var green = _this.parseInteger(e.currentTarget.value, 255);
            var hsl = new HslColor(_this.props.hue, _this.props.saturation, _this.props.lightness);
            var rgb = RgbColor.FromHsl(hsl);
            rgb.green = green;
            _this.props.onChange(rgb.toString());
        };
        _this.handleChangeBlue = function (e) {
            var blue = _this.parseInteger(e.currentTarget.value, 255);
            var hsl = new HslColor(_this.props.hue, _this.props.saturation, _this.props.lightness);
            var rgb = RgbColor.FromHsl(hsl);
            rgb.blue = blue;
            _this.props.onChange(rgb.toString());
        };
        _this.handleChangeHex = function (e) {
            var hex = '#' + e.currentTarget.value;
            var rgb = RgbColor.FromString(hex);
            _this.props.onChange(rgb.toString());
        };
        return _this;
    }
    InfoBoxBase.prototype.componentDidMount = function () {
        this.updateHex();
        // Focus on first input:
        this.inputElement.focus();
    };
    InfoBoxBase.prototype.componentDidUpdate = function () {
        this.updateHex();
    };
    // Clamped integer parsing. 
    // Returns 0 if not parsable.
    // Result always between 0..max (inclusive).
    InfoBoxBase.prototype.parseInteger = function (input, max) {
        var value = parseInt(input);
        if (isNaN(value))
            value = 0;
        return Math.max(Math.min(value, max), 0);
    };
    // The RGB hex input is an uncontrolled component, because we want to
    // apply changes to it only on onBlur.
    // This is why we must use a ref to control it.
    InfoBoxBase.prototype.updateHex = function () {
        var hsl = new HslColor(this.props.hue, this.props.saturation, this.props.lightness, 1);
        var rgb = RgbColor.FromHsl(hsl);
        // Remove the '#' from the color string.
        this.inputElement.value = rgb.toString().substr(1).toUpperCase();
    };
    InfoBoxBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        var hsl = new HslColor(p.hue, p.saturation, p.lightness, 1);
        var rgb = RgbColor.FromHsl(hsl);
        return (React.createElement("div", { className: p.className },
            React.createElement("div", { style: { background: "".concat(rgb.toString()), borderWidth: p.lightness > 0.9 ? '1px' : '0' }, onClick: this.handleClick }),
            React.createElement("div", null,
                React.createElement("table", null,
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "#"),
                            React.createElement("td", null,
                                React.createElement("input", { type: "text", ref: function (el) { return _this.inputElement = el; }, onBlur: this.handleChangeHex }))))),
                React.createElement("table", null,
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "H"),
                            React.createElement("td", null,
                                React.createElement("input", { type: "text", value: Math.round(p.hue).toString(), onChange: this.handleChangeHue }))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "S"),
                            React.createElement("td", null,
                                React.createElement("input", { type: "text", value: Math.round(p.saturation * 100).toString(), onChange: this.handleChangeSaturation }))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "L"),
                            React.createElement("td", null,
                                React.createElement("input", { type: "text", value: Math.round(p.lightness * 100).toString(), onChange: this.handleChangeLightness }))))),
                React.createElement("table", null,
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "R"),
                            React.createElement("td", null,
                                React.createElement("input", { type: "text", value: Math.round(rgb.red).toString(), onChange: this.handleChangeRed }))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "G"),
                            React.createElement("td", null,
                                React.createElement("input", { type: "text", value: Math.round(rgb.green).toString(), onChange: this.handleChangeGreen }))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "B"),
                            React.createElement("td", null,
                                React.createElement("input", { type: "text", value: Math.round(rgb.blue).toString(), onChange: this.handleChangeBlue }))))))));
    };
    return InfoBoxBase;
}(React.Component));
var InfoBox = styled(InfoBoxBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  margin-right: 20px;\n  \n  & > div:first-child {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 80px;\n    box-sizing: border-box;\n    border-color: ", ";\n    border-style: solid;\n    border-top-left-radius: ", "px;\n    border-top-right-radius: ", "px;\n    cursor: pointer;\n  }\n\n  & > div:last-child {\n    position: absolute;\n    left: 0;\n    top: 80px;\n    bottom: 0;\n    width: 100%;\n    box-sizing: border-box;\n    border: solid 1px ", ";\n    border-top: none;\n    border-bottom-left-radius: ", "px;\n    border-bottom-right-radius: ", "px;    \n    padding: 10px 20px 0 10px;\n  }\n\n  table {\n    margin-bottom: 4px;\n  }\n\n  td {\n    position: relative;\n  }\n\n  input {\n    width: 100%;\n    background: ", ";\n    border: solid 1px ", ";\n    padding: 0 6px 0 6px;\n    transition: border-color ", "s ease;\n    border-radius: 2px;\n    color: ", ";\n    font-weight: 500;\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n\n  td:first-child {\n    padding: 0 10px 0 0;\n    color: #888;\n  }\n"], ["\n  position: relative;\n  width: ", "px;\n  height: ", "px;\n  margin-right: 20px;\n  \n  & > div:first-child {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 80px;\n    box-sizing: border-box;\n    border-color: ", ";\n    border-style: solid;\n    border-top-left-radius: ", "px;\n    border-top-right-radius: ", "px;\n    cursor: pointer;\n  }\n\n  & > div:last-child {\n    position: absolute;\n    left: 0;\n    top: 80px;\n    bottom: 0;\n    width: 100%;\n    box-sizing: border-box;\n    border: solid 1px ", ";\n    border-top: none;\n    border-bottom-left-radius: ", "px;\n    border-bottom-right-radius: ", "px;    \n    padding: 10px 20px 0 10px;\n  }\n\n  table {\n    margin-bottom: 4px;\n  }\n\n  td {\n    position: relative;\n  }\n\n  input {\n    width: 100%;\n    background: ", ";\n    border: solid 1px ", ";\n    padding: 0 6px 0 6px;\n    transition: border-color ", "s ease;\n    border-radius: 2px;\n    color: ", ";\n    font-weight: 500;\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n\n  td:first-child {\n    padding: 0 10px 0 0;\n    color: #888;\n  }\n"])), WIDTH, HEIGHT, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.background; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.transition.duration; }, function (p) { return p.theme.fontColor; }, function (p) { return p.theme.normalColor; });
export { InfoBox };
var templateObject_1;
