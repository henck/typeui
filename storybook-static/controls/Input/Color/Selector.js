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
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
// Helpers
import { RgbColor } from '../../../helper/RgbColor';
import { HslColor } from '../../../helper/HslColor';
import { lighten } from '../../../helper/lighten';
// Other controls
import { HueBox } from './HueBox';
import { ColorBox } from './ColorBox';
import { InfoBox } from './InfoBox';
import { SwatchBox } from './SwatchBox';
import { HarmonyBox } from './HarmonyBox';
import { Tabs } from '../../Tabs/Tabs';
import { Button } from '../../Button/Button';
var SelectorBase = /** @class */ (function (_super) {
    __extends(SelectorBase, _super);
    function SelectorBase(props) {
        var _this = _super.call(this, props) || this;
        _this.mouseType = 'none';
        _this.handleMouseMove = function (e) {
            if (_this.mouseType === 'hue') {
                _this.setHue(e.clientY - _this.offsetY);
            }
            if (_this.mouseType === 'color') {
                _this.setColor(e.clientX - _this.offsetX, e.clientY - _this.offsetY);
            }
        };
        _this.handleMouseUp = function () {
            _this.mouseType = 'none';
        };
        _this.handleHueMouseDown = function (data) {
            _this.mouseType = 'hue';
            _this.mouseY = data.mouseY;
            _this.offsetY = data.offsetY;
            _this.mouseHeight = data.height;
            _this.setHue(_this.mouseY);
        };
        _this.handleColorMouseDown = function (data) {
            _this.mouseType = 'color';
            _this.mouseX = data.mouseX;
            _this.offsetX = data.offsetX;
            _this.mouseWidth = data.width;
            _this.mouseY = data.mouseY;
            _this.offsetY = data.offsetY;
            _this.mouseHeight = data.height;
            _this.setColor(_this.mouseX, _this.mouseY);
        };
        _this.handleClickSwatch = function (idx) {
            _this.setState(_this.getStateFromColor(_this.state.swatches[idx].color));
        };
        _this.handleClickHarmony = function (color) {
            _this.addSwatch(color);
        };
        _this.handleToggleSwatch = function (idx) {
            _this.setState(function (prevState) {
                var swatches = prevState.swatches;
                swatches[idx].locked = !swatches[idx].locked;
                _this.saveSwatches(swatches);
                return {
                    swatches: swatches
                };
            });
        };
        _this.handleClickColor = function (color) {
            _this.addSwatch(color);
        };
        _this.handleChangeColor = function (color) {
            var rgb = RgbColor.FromString(color);
            var hsl = HslColor.FromRgb(rgb);
            var _a = _this.sl_to_sv(hsl.saturation, hsl.lightness), s = _a[0], v = _a[1];
            _this.setState({
                hue: hsl.hue,
                hsv_saturation: s,
                hsv_brightness: v,
                hsl_saturation: hsl.saturation,
                hsl_lightness: hsl.lightness
            });
        };
        _this.handleSelect = function (e) {
            if (e)
                e.stopPropagation();
            _this.props.onSelect(RgbColor.FromHsl(new HslColor(_this.state.hue, _this.state.hsl_saturation, _this.state.hsl_lightness)).toString());
        };
        _this.handleCancel = function (e) {
            if (e)
                e.stopPropagation();
            _this.props.onSelect(null);
        };
        // Close control when Escape is pressed.
        _this.handleKeyDown = function (e) {
            if (e.key == 'Enter')
                _this.handleSelect();
            if (e.key == 'Escape')
                _this.handleCancel();
        };
        _this.state = __assign(__assign({}, _this.getStateFromColor(_this.props.value)), {
            swatches: _this.loadSwatches()
        });
        return _this;
    }
    SelectorBase.prototype.componentDidMount = function () {
        // Add document-wide event listener for mouse move/up.
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        // Listen for document-wide keydown event when component mounts.
        document.addEventListener('keydown', this.handleKeyDown);
    };
    SelectorBase.prototype.componentWillUnmount = function () {
        // Remove document-wide event listener for mouse move/up.
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        // Clean up document-wide keydown event when component unmounts.
        document.removeEventListener('keydown', this.handleKeyDown);
    };
    // Restore all swatches from local storage.
    // Uses default colors for missing swatches.
    SelectorBase.prototype.loadSwatches = function () {
        var swatches = [];
        for (var i = 0; i < 10; i++) {
            var swatch = {
                color: localStorage.getItem("swatch".concat(i, "_color")) || this.defaultColors()[i],
                locked: localStorage.getItem("swatch".concat(i, "_locked")) === 'locked' || false
            };
            swatches.push(swatch);
        }
        return swatches;
    };
    // Save all swatches to local storage.
    SelectorBase.prototype.saveSwatches = function (swatches) {
        for (var i = 0; i < 10; i++) {
            localStorage.setItem("swatch".concat(i, "_color"), swatches[i].color);
            localStorage.setItem("swatch".concat(i, "_locked"), swatches[i].locked ? 'locked' : 'unlocked');
        }
    };
    SelectorBase.prototype.defaultColors = function () {
        return [
            '#e74c3c',
            '#9b59b6',
            '#5499c7',
            '#1abc9c',
            '#52be80',
            '#f1c40f',
            '#e67e22',
            '#cacfd2',
            '#99a3a4',
            '#566573'
        ];
    };
    SelectorBase.prototype.getStateFromColor = function (color) {
        var rgb = RgbColor.FromString(color);
        var hsl = HslColor.FromRgb(rgb);
        var _a = this.sl_to_sv(hsl.saturation, hsl.lightness), s = _a[0], v = _a[1];
        return {
            hue: hsl.hue,
            hsv_saturation: s,
            hsv_brightness: v,
            hsl_saturation: hsl.saturation,
            hsl_lightness: hsl.lightness,
        };
    };
    SelectorBase.prototype.sv_to_sl = function (s, v) {
        // both hsv and hsl values are in [0, 1]
        var l = (2 - s) * v / 2;
        if (l != 0) {
            if (l == 1) {
                s = 0;
            }
            else if (l < 0.5) {
                s = s * v / (l * 2);
            }
            else {
                s = s * v / (2 - l * 2);
            }
        }
        return [s, l];
    };
    SelectorBase.prototype.sl_to_sv = function (s, l) {
        var v = s * Math.min(l, 1 - l) + l;
        s = v ? 2 - 2 * l / v : 0;
        return [s, v];
    };
    SelectorBase.prototype.setHue = function (y) {
        this.setState({
            hue: Math.min(Math.max(Math.floor(y / this.mouseHeight * 360), 0), 359.99)
        });
    };
    SelectorBase.prototype.addSwatch = function (color) {
        var swatches = this.state.swatches;
        // Find index of rightmost unlocked swatch.
        var idx = swatches.map(function (s) { return s; }).reverse().findIndex(function (s) { return !s.locked; });
        // If there is no unlocked swatch, then abort.
        if (idx === -1)
            return;
        // Remove rightmost unlocked swatch.
        swatches.splice(9 - idx, 1);
        // Add new swatch at the front.
        swatches.unshift({
            color: color,
            locked: false
        });
        // Save swatches in local storage.
        this.saveSwatches(swatches);
        // Set swatches in component state.
        this.setState({
            swatches: swatches
        });
    };
    SelectorBase.prototype.setColor = function (x, y) {
        var hsv_s = Math.max(Math.min(1, x / this.mouseWidth), 0);
        var hsv_b = Math.max(Math.min(1, 1 - y / this.mouseHeight), 0);
        var _a = this.sv_to_sl(hsv_s, hsv_b), hsl_s = _a[0], hsl_l = _a[1];
        this.setState({
            hsv_saturation: hsv_s,
            hsv_brightness: hsv_b,
            hsl_saturation: hsl_s,
            hsl_lightness: hsl_l
        });
    };
    SelectorBase.prototype.render = function () {
        var p = this.props;
        return (React.createElement("div", { className: p.className },
            React.createElement("div", null,
                React.createElement("div", { style: { display: 'inline-flex' } },
                    React.createElement(ColorBox, { hue: this.state.hue, saturation: this.state.hsv_saturation, brightness: this.state.hsv_brightness, onMouseDown: this.handleColorMouseDown }),
                    React.createElement(HueBox, { hue: this.state.hue, onMouseDown: this.handleHueMouseDown }),
                    React.createElement(InfoBox, { hue: this.state.hue, saturation: this.state.hsl_saturation, lightness: this.state.hsl_lightness, onClick: this.handleClickColor, onChange: this.handleChangeColor }),
                    React.createElement(SwatchBox, { swatches: this.state.swatches, onClick: this.handleClickSwatch, onToggle: this.handleToggleSwatch })),
                React.createElement(Tabs, { underlined: true },
                    React.createElement(Tabs.Pane, { label: "Complementary" },
                        React.createElement(HarmonyBox, { type: "complementary", hue: this.state.hue, saturation: this.state.hsl_saturation, lightness: this.state.hsl_lightness, onClick: this.handleClickHarmony })),
                    React.createElement(Tabs.Pane, { label: "Shades" },
                        React.createElement(HarmonyBox, { type: "shades", hue: this.state.hue, saturation: this.state.hsl_saturation, lightness: this.state.hsl_lightness, onClick: this.handleClickHarmony })),
                    React.createElement(Tabs.Pane, { label: "Tints" },
                        React.createElement(HarmonyBox, { type: "tints", hue: this.state.hue, saturation: this.state.hsl_saturation, lightness: this.state.hsl_lightness, onClick: this.handleClickHarmony })))),
            React.createElement("div", null,
                React.createElement(Button, { primary: true, onClick: this.handleSelect }, "Select"),
                React.createElement(Button, { secondary: true, onClick: this.handleCancel }, "Cancel"))));
    };
    return SelectorBase;
}(React.Component));
var Selector = styled(SelectorBase)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 99; /* Must be positioned over everything else */\n  ", "\n  ", "\n  ", "\n  ", "\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  cursor: auto; /* Unset cursor set by parent input */\n\n  & > div {\n    padding: 10px;\n    position: relative;\n  }\n\n  & > div:last-child {\n    padding: 10px;\n    text-align: right;\n    border-top: solid 1px ", ";\n    background: ", ";    \n    border-bottom-left-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &.fade-enter {\n    opacity: 0.01;\n    transform: scale(0.01);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 300ms ease-out;\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0.01;\n    transform: scale(0.01);\n    transition: all 300ms ease-in;\n  }  \n"], ["\n  position: absolute;\n  z-index: 99; /* Must be positioned over everything else */\n  ", "\n  ", "\n  ", "\n  ", "\n  background: ", ";\n  border: solid 1px ", ";\n  border-radius: ", "px;\n  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;\n  cursor: auto; /* Unset cursor set by parent input */\n\n  & > div {\n    padding: 10px;\n    position: relative;\n  }\n\n  & > div:last-child {\n    padding: 10px;\n    text-align: right;\n    border-top: solid 1px ", ";\n    background: ", ";    \n    border-bottom-left-radius: ", "px;\n    border-bottom-right-radius: ", "px;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &.fade-enter {\n    opacity: 0.01;\n    transform: scale(0.01);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 300ms ease-out;\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0.01;\n    transform: scale(0.01);\n    transition: all 300ms ease-in;\n  }  \n"])), function (p) { return p.right && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["right: 0;"], ["right: 0;"]))); }, function (p) { return !p.right && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["left: 0;"], ["left: 0;"]))); }, function (p) { return p.upward && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["bottom: 42px;"], ["bottom: 42px;"]))); }, function (p) { return !p.upward && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["top: 42px;"], ["top: 42px;"]))); }, function (p) { return p.theme.background; }, function (p) { return p.theme.normalColor; }, function (p) { return p.theme.radius; }, function (p) { return p.theme.normalColor; }, function (p) { return lighten(0.1, p.theme.normalColor); }, function (p) { return p.theme.radius; }, function (p) { return p.theme.radius; }, function (p) { return p.right && p.upward && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["transform-origin: bottom right;"], ["transform-origin: bottom right;"]))); }, function (p) { return !p.right && p.upward && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["transform-origin: bottom left;"], ["transform-origin: bottom left;"]))); }, function (p) { return p.right && !p.upward && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["transform-origin: top right;"], ["transform-origin: top right;"]))); }, function (p) { return !p.right && !p.upward && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["transform-origin: top left;"], ["transform-origin: top left;"]))); });
export { Selector };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
