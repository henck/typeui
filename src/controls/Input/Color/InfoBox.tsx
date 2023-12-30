import * as React from 'react';
import styled from '../../../styles/Theme';

// Helpers
import { RgbColor } from '../../../helper/RgbColor';
import { HslColor } from '../../../helper/HslColor';

interface IProps {
  /** @ignore */
  className?: string;
  hue: number;
  saturation: number;
  lightness: number;
  onClick: (color: string) => void;
  onChange: (color: string) => void;
}

const WIDTH  = 100;
const HEIGHT = 276;

const InfoBoxBase = (props: IProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => updateHex());
  React.useEffect(() => inputRef.current.focus(), []);

  const handleClick = () => {
    const color = RgbColor.FromHsl(new HslColor(props.hue, props.saturation, props.lightness)).toString();
    props.onClick(color);
  }

  // Clamped integer parsing. 
  // Returns 0 if not parsable.
  // Result always between 0..max (inclusive).
  const parseInteger = (input: string, max: number) => {
    let value = parseInt(input);
    if(isNaN(value)) value = 0;
    return Math.max(Math.min(value, max), 0);
  }

  const handleChangeHue = (e: React.FormEvent<HTMLInputElement>) => {
    const hue = parseInteger(e.currentTarget.value, 359);
    const hsl = new HslColor(hue, props.saturation, props.lightness);
    const rgb = RgbColor.FromHsl(hsl).toString();
    props.onChange(rgb);
  }

  const handleChangeSaturation = (e: React.FormEvent<HTMLInputElement>) => {
    const saturation = parseInteger(e.currentTarget.value, 100) / 100;
    const hsl = new HslColor(props.hue, saturation, props.lightness);
    const rgb = RgbColor.FromHsl(hsl).toString();
    props.onChange(rgb);
  }

  const handleChangeLightness = (e: React.FormEvent<HTMLInputElement>) => {
    const lightness = parseInteger(e.currentTarget.value, 100) / 100;
    const hsl = new HslColor(props.hue, props.saturation, lightness);
    const rgb = RgbColor.FromHsl(hsl).toString();
    props.onChange(rgb);
  }

  const handleChangeRed = (e: React.FormEvent<HTMLInputElement>) => {
    const red = parseInteger(e.currentTarget.value, 255);
    const hsl = new HslColor(props.hue, props.saturation, props.lightness);
    const rgb = RgbColor.FromHsl(hsl);
    rgb.red = red;
    props.onChange(rgb.toString());    
  }

  const handleChangeGreen = (e: React.FormEvent<HTMLInputElement>) => {
    const green = parseInteger(e.currentTarget.value, 255);
    const hsl = new HslColor(props.hue, props.saturation, props.lightness);
    const rgb = RgbColor.FromHsl(hsl);
    rgb.green = green;
    props.onChange(rgb.toString());    
  }  

  const handleChangeBlue = (e: React.FormEvent<HTMLInputElement>) => {
    const blue = parseInteger(e.currentTarget.value, 255);
    const hsl = new HslColor(props.hue, props.saturation, props.lightness);
    const rgb = RgbColor.FromHsl(hsl);
    rgb.blue = blue;
    props.onChange(rgb.toString());    
  }  
  
  const handleChangeHex = (e: React.FormEvent<HTMLInputElement>) => {
    const hex = '#' + e.currentTarget.value;
    const rgb = RgbColor.FromString(hex);
    props.onChange(rgb.toString());
  }

  // The RGB hex input is an uncontrolled component, because we want to
  // apply changes to it only on onBlur.
  // This is why we must use a ref to control it.
  const updateHex = () => {
    const hsl = new HslColor(props.hue, props.saturation, props.lightness, 1);
    const rgb = RgbColor.FromHsl(hsl);
    // Remove the '#' from the color string.
    inputRef.current.value = rgb.toString().substr(1).toUpperCase();
  }

  const hsl = new HslColor(props.hue, props.saturation, props.lightness, 1);
  const rgb = RgbColor.FromHsl(hsl);

  return (
    <div className={props.className}>
      <div style={{background: `${rgb.toString()}`, borderWidth: props.lightness > 0.9 ? '1px' : '0'}} onClick={handleClick}></div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>#</td>
              <td><input type="text" ref={inputRef} onBlur={handleChangeHex}/></td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>H</td>
              <td><input type="text" value={Math.round(props.hue).toString()} onChange={handleChangeHue}/></td>
            </tr>
            <tr>
              <td>S</td>
              <td><input type="text" value={Math.round(props.saturation * 100).toString()} onChange={handleChangeSaturation}/></td>
            </tr>
            <tr>
              <td>L</td>
              <td><input type="text" value={Math.round(props.lightness * 100).toString()} onChange={handleChangeLightness}/></td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>R</td>
              <td><input type="text" value={Math.round(rgb.red).toString()} onChange={handleChangeRed}/></td>
            </tr>
            <tr>
              <td>G</td>
              <td><input type="text" value={Math.round(rgb.green).toString()} onChange={handleChangeGreen}/></td>
            </tr>
            <tr>
              <td>B</td>
              <td><input type="text" value={Math.round(rgb.blue).toString()} onChange={handleChangeBlue}/></td>
            </tr>  
          </tbody>          
        </table>
      </div>
    </div>
  );
}

const InfoBox = styled(InfoBoxBase)`
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
    color: #888;
  }
`

export { InfoBox }
