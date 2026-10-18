import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../../styles/Theme';
import { css } from 'styled-components';
// Helpers
import { RgbColor } from '../../../helper/RgbColor';
import { HslColor } from '../../../helper/HslColor';
import { darken } from '../../../helper/darken';
// Other controls
import { HueBox } from './HueBox';
import { ColorBox } from './ColorBox';
import { InfoBox } from './InfoBox';
import { SwatchBox } from './SwatchBox';
import { HarmonyBox } from './HarmonyBox';
import { Tabs } from '../../Tabs/Tabs';
import { Button } from '../../Button/Button';
class SelectorBase extends React.Component {
    constructor(props) {
        super(props);
        this.mouseType = 'none';
        this.handleMouseMove = (e) => {
            if (this.mouseType === 'hue') {
                this.setHue(e.clientY - this.offsetY);
            }
            if (this.mouseType === 'color') {
                this.setColor(e.clientX - this.offsetX, e.clientY - this.offsetY);
            }
        };
        this.handleMouseUp = () => {
            this.mouseType = 'none';
        };
        this.handleHueMouseDown = (data) => {
            this.mouseType = 'hue';
            this.mouseY = data.mouseY;
            this.offsetY = data.offsetY;
            this.mouseHeight = data.height;
            this.setHue(this.mouseY);
        };
        this.handleColorMouseDown = (data) => {
            this.mouseType = 'color';
            this.mouseX = data.mouseX;
            this.offsetX = data.offsetX;
            this.mouseWidth = data.width;
            this.mouseY = data.mouseY;
            this.offsetY = data.offsetY;
            this.mouseHeight = data.height;
            this.setColor(this.mouseX, this.mouseY);
        };
        this.handleClickSwatch = (idx) => {
            this.setState(this.getStateFromColor(this.state.swatches[idx].color));
        };
        this.handleClickHarmony = (color) => {
            this.addSwatch(color);
        };
        this.handleToggleSwatch = (idx) => {
            this.setState((prevState) => {
                let swatches = prevState.swatches;
                swatches[idx].locked = !swatches[idx].locked;
                this.saveSwatches(swatches);
                return {
                    swatches: swatches
                };
            });
        };
        this.handleClickColor = (color) => {
            this.addSwatch(color);
        };
        this.handleChangeColor = (color) => {
            let rgb = RgbColor.FromString(color);
            let hsl = HslColor.FromRgb(rgb);
            let [s, v] = this.sl_to_sv(hsl.saturation, hsl.lightness);
            this.setState({
                hue: hsl.hue,
                hsv_saturation: s,
                hsv_brightness: v,
                hsl_saturation: hsl.saturation,
                hsl_lightness: hsl.lightness
            });
        };
        this.handleSelect = (e) => {
            if (e)
                e.stopPropagation();
            this.props.onSelect(RgbColor.FromHsl(new HslColor(this.state.hue, this.state.hsl_saturation, this.state.hsl_lightness)).toString());
        };
        this.handleCancel = (e) => {
            if (e)
                e.stopPropagation();
            this.props.onSelect(null);
        };
        // Close control when Escape is pressed.
        this.handleKeyDown = (e) => {
            if (e.key == 'Enter')
                this.handleSelect();
            if (e.key == 'Escape')
                this.handleCancel();
        };
        this.state = {
            ...this.getStateFromColor(this.props.value),
            ...{
                swatches: this.loadSwatches()
            }
        };
    }
    componentDidMount() {
        // Add document-wide event listener for mouse move/up.
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        // Listen for document-wide keydown event when component mounts.
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        // Remove document-wide event listener for mouse move/up.
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        // Clean up document-wide keydown event when component unmounts.
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    // Restore all swatches from local storage.
    // Uses default colors for missing swatches.
    loadSwatches() {
        let swatches = [];
        for (let i = 0; i < 10; i++) {
            let swatch = {
                color: localStorage.getItem(`swatch${i}_color`) || this.defaultColors()[i],
                locked: localStorage.getItem(`swatch${i}_locked`) === 'locked' || false
            };
            swatches.push(swatch);
        }
        return swatches;
    }
    // Save all swatches to local storage.
    saveSwatches(swatches) {
        for (let i = 0; i < 10; i++) {
            localStorage.setItem(`swatch${i}_color`, swatches[i].color);
            localStorage.setItem(`swatch${i}_locked`, swatches[i].locked ? 'locked' : 'unlocked');
        }
    }
    defaultColors() {
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
    }
    getStateFromColor(color) {
        let rgb = RgbColor.FromString(color);
        let hsl = HslColor.FromRgb(rgb);
        let [s, v] = this.sl_to_sv(hsl.saturation, hsl.lightness);
        return {
            hue: hsl.hue,
            hsv_saturation: s,
            hsv_brightness: v,
            hsl_saturation: hsl.saturation,
            hsl_lightness: hsl.lightness,
        };
    }
    sv_to_sl(s, v) {
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
    }
    sl_to_sv(s, l) {
        let v = s * Math.min(l, 1 - l) + l;
        s = v ? 2 - 2 * l / v : 0;
        return [s, v];
    }
    setHue(y) {
        this.setState({
            hue: Math.min(Math.max(Math.floor(y / this.mouseHeight * 360), 0), 359.99)
        });
    }
    addSwatch(color) {
        let swatches = this.state.swatches;
        // Find index of rightmost unlocked swatch.
        let idx = swatches.map(s => s).reverse().findIndex((s) => !s.locked);
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
    }
    setColor(x, y) {
        let hsv_s = Math.max(Math.min(1, x / this.mouseWidth), 0);
        let hsv_b = Math.max(Math.min(1, 1 - y / this.mouseHeight), 0);
        let [hsl_s, hsl_l] = this.sv_to_sl(hsv_s, hsv_b);
        this.setState({
            hsv_saturation: hsv_s,
            hsv_brightness: hsv_b,
            hsl_saturation: hsl_s,
            hsl_lightness: hsl_l
        });
    }
    render() {
        let p = this.props;
        return (_jsxs("div", { className: p.className, ref: p.nodeRef, children: [_jsxs("div", { children: [_jsxs("div", { style: { display: 'inline-flex' }, children: [_jsx(ColorBox, { hue: this.state.hue, saturation: this.state.hsv_saturation, brightness: this.state.hsv_brightness, onMouseDown: this.handleColorMouseDown }), _jsx(HueBox, { hue: this.state.hue, onMouseDown: this.handleHueMouseDown }), _jsx(InfoBox, { hue: this.state.hue, saturation: this.state.hsl_saturation, lightness: this.state.hsl_lightness, onClick: this.handleClickColor, onChange: this.handleChangeColor }), _jsx(SwatchBox, { swatches: this.state.swatches, onClick: this.handleClickSwatch, onToggle: this.handleToggleSwatch })] }), _jsxs(Tabs, { underlined: true, children: [_jsx(Tabs.Pane, { label: "Shades", children: _jsx(HarmonyBox, { type: "shades", hue: this.state.hue, saturation: this.state.hsl_saturation, lightness: this.state.hsl_lightness, onClick: this.handleClickHarmony }) }), _jsx(Tabs.Pane, { label: "Tints", children: _jsx(HarmonyBox, { type: "tints", hue: this.state.hue, saturation: this.state.hsl_saturation, lightness: this.state.hsl_lightness, onClick: this.handleClickHarmony }) }), _jsx(Tabs.Pane, { label: "Complementary", children: _jsx(HarmonyBox, { type: "complementary", hue: this.state.hue, saturation: this.state.hsl_saturation, lightness: this.state.hsl_lightness, onClick: this.handleClickHarmony }) })] })] }), _jsxs("div", { children: [_jsx(Button, { primary: true, onClick: this.handleSelect, children: "Select" }), _jsx(Button, { secondary: true, onClick: this.handleCancel, children: "Cancel" })] })] }));
    }
}
const Selector = styled(SelectorBase) `
  position: absolute;
  z-index: 99; /* Must be positioned over everything else */
  ${p => p.right && css `right: 0;`}
  ${p => !p.right && css `left: 0;`}
  ${p => p.upward && css `bottom: 42px;`}
  ${p => !p.upward && css `top: 42px;`}
  background: ${p => p.theme.background};
  border: solid 1px ${p => p.theme.normalColor};
  border-radius: ${p => p.theme.radius}px;
  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;
  cursor: auto; /* Unset cursor set by parent input */

  & > div {
    padding: 10px;
    position: relative;
  }

  & > div:last-child {
    padding: 10px;
    text-align: right;
    border-top: solid 1px ${p => p.theme.normalColor};
    background: ${p => darken(0.1, p.theme.background)};    
    border-bottom-left-radius: ${p => p.theme.radius}px;
    border-bottom-right-radius: ${p => p.theme.radius}px;
  }

  ${p => p.right && p.upward && css `transform-origin: bottom right;`}
  ${p => !p.right && p.upward && css `transform-origin: bottom left;`}
  ${p => p.right && !p.upward && css `transform-origin: top right;`}
  ${p => !p.right && !p.upward && css `transform-origin: top left;`}

  &.fade-enter {
    opacity: 0.01;
    transform: scale(0.01);
  }
  &.fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms ease-out;
  }
  &.fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit-active {
    opacity: 0.01;
    transform: scale(0.01);
    transition: all 300ms ease-in;
  }  
`;
export { Selector };
