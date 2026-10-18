import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../../styles/Theme';
// Helpers
import { RgbColor } from '../../../helper/RgbColor';
import { HslColor } from '../../../helper/HslColor';
const WIDTH = 100;
const HEIGHT = 276;
const InfoBoxBase = (props) => {
    const inputRef = React.useRef(null);
    React.useEffect(() => updateHex());
    React.useEffect(() => inputRef.current.focus(), []);
    const handleClick = () => {
        const color = RgbColor.FromHsl(new HslColor(props.hue, props.saturation, props.lightness)).toString();
        props.onClick(color);
    };
    // Clamped integer parsing. 
    // Returns 0 if not parsable.
    // Result always between 0..max (inclusive).
    const parseInteger = (input, max) => {
        let value = parseInt(input);
        if (isNaN(value))
            value = 0;
        return Math.max(Math.min(value, max), 0);
    };
    const handleChangeHue = (e) => {
        const hue = parseInteger(e.currentTarget.value, 359);
        const hsl = new HslColor(hue, props.saturation, props.lightness);
        const rgb = RgbColor.FromHsl(hsl).toString();
        props.onChange(rgb);
    };
    const handleChangeSaturation = (e) => {
        const saturation = parseInteger(e.currentTarget.value, 100) / 100;
        const hsl = new HslColor(props.hue, saturation, props.lightness);
        const rgb = RgbColor.FromHsl(hsl).toString();
        props.onChange(rgb);
    };
    const handleChangeLightness = (e) => {
        const lightness = parseInteger(e.currentTarget.value, 100) / 100;
        const hsl = new HslColor(props.hue, props.saturation, lightness);
        const rgb = RgbColor.FromHsl(hsl).toString();
        props.onChange(rgb);
    };
    const handleChangeRed = (e) => {
        const red = parseInteger(e.currentTarget.value, 255);
        const hsl = new HslColor(props.hue, props.saturation, props.lightness);
        const rgb = RgbColor.FromHsl(hsl);
        rgb.red = red;
        props.onChange(rgb.toString());
    };
    const handleChangeGreen = (e) => {
        const green = parseInteger(e.currentTarget.value, 255);
        const hsl = new HslColor(props.hue, props.saturation, props.lightness);
        const rgb = RgbColor.FromHsl(hsl);
        rgb.green = green;
        props.onChange(rgb.toString());
    };
    const handleChangeBlue = (e) => {
        const blue = parseInteger(e.currentTarget.value, 255);
        const hsl = new HslColor(props.hue, props.saturation, props.lightness);
        const rgb = RgbColor.FromHsl(hsl);
        rgb.blue = blue;
        props.onChange(rgb.toString());
    };
    const handleChangeHex = (e) => {
        const hex = '#' + e.currentTarget.value;
        const rgb = RgbColor.FromString(hex);
        props.onChange(rgb.toString());
    };
    // The RGB hex input is an uncontrolled component, because we want to
    // apply changes to it only on onBlur.
    // This is why we must use a ref to control it.
    const updateHex = () => {
        const hsl = new HslColor(props.hue, props.saturation, props.lightness, 1);
        const rgb = RgbColor.FromHsl(hsl);
        // Remove the '#' from the color string.
        inputRef.current.value = rgb.toString().substr(1).toUpperCase();
    };
    const hsl = new HslColor(props.hue, props.saturation, props.lightness, 1);
    const rgb = RgbColor.FromHsl(hsl);
    return (_jsxs("div", { className: props.className, children: [_jsx("div", { style: { background: `${rgb.toString()}`, borderWidth: props.lightness > 0.9 ? '1px' : '0' }, onClick: handleClick }), _jsxs("div", { children: [_jsx("table", { children: _jsx("tbody", { children: _jsxs("tr", { children: [_jsx("td", { children: "#" }), _jsx("td", { children: _jsx("input", { type: "text", ref: inputRef, onBlur: handleChangeHex }) })] }) }) }), _jsx("table", { children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: "H" }), _jsx("td", { children: _jsx("input", { type: "text", value: Math.round(props.hue).toString(), onChange: handleChangeHue }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "S" }), _jsx("td", { children: _jsx("input", { type: "text", value: Math.round(props.saturation * 100).toString(), onChange: handleChangeSaturation }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "L" }), _jsx("td", { children: _jsx("input", { type: "text", value: Math.round(props.lightness * 100).toString(), onChange: handleChangeLightness }) })] })] }) }), _jsx("table", { children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: "R" }), _jsx("td", { children: _jsx("input", { type: "text", value: Math.round(rgb.red).toString(), onChange: handleChangeRed }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "G" }), _jsx("td", { children: _jsx("input", { type: "text", value: Math.round(rgb.green).toString(), onChange: handleChangeGreen }) })] }), _jsxs("tr", { children: [_jsx("td", { children: "B" }), _jsx("td", { children: _jsx("input", { type: "text", value: Math.round(rgb.blue).toString(), onChange: handleChangeBlue }) })] })] }) })] })] }));
};
const InfoBox = styled(InfoBoxBase) `
  position: relative;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  margin-right: 20px;
  
  & > div:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    border-color: ${p => p.theme.normalColor};
    border-style: solid;
    border-top-left-radius: ${p => p.theme.radius}px;
    border-top-right-radius: ${p => p.theme.radius}px;
    cursor: pointer;
  }

  & > div:last-child {
    position: absolute;
    left: 0;
    top: 80px;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    border: solid 1px ${p => p.theme.normalColor};
    border-top: none;
    border-bottom-left-radius: ${p => p.theme.radius}px;
    border-bottom-right-radius: ${p => p.theme.radius}px;    
    padding: 10px 20px 0 10px;
  }

  table {
    margin-bottom: 4px;
  }

  td {
    position: relative;
  }

  input {
    width: 100%;
    background: ${p => p.theme.background};
    border: solid 1px ${p => p.theme.normalColor};
    padding: 0 6px 0 6px;
    transition: border-color ${p => p.theme.transition.duration}s ease;
    border-radius: 2px;
    color: ${p => p.theme.fontColor};
    font-weight: 500;
    &:focus {
      border-color: ${p => p.theme.normalColor};
    }
  }

  td:first-child {
    padding: 0 10px 0 0;
    color: ${p => p.theme.fontColor};
  }
`;
export { InfoBox };
