import * as React from 'react';
import styled from '../../../styles/Theme';
import { RgbColor } from '../../../helper/RgbColor';
import { HslColor } from '../../../helper/HslColor';

interface IInfoBoxProps {
  className?: string;
  hue: number;
  saturation: number;
  lightness: number;
  onClick: (color: string) => void;
  onChange: (color: string) => void;
}

const WIDTH = 100;
const HEIGHT = 276;

class InfoBoxBase extends React.Component<IInfoBoxProps, {}> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: IInfoBoxProps) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
    this.handleChangeHue = this.handleChangeHue.bind(this);
    this.handleChangeSaturation = this.handleChangeSaturation.bind(this);
    this.handleChangeLightness = this.handleChangeLightness.bind(this);
    this.handleChangeRed = this.handleChangeRed.bind(this);
    this.handleChangeGreen = this.handleChangeGreen.bind(this);
    this.handleChangeBlue = this.handleChangeBlue.bind(this);
    this.handleChangeHex = this.handleChangeHex.bind(this);
  }

  private handleClick = () => {
    let color = RgbColor.FromHsl(new HslColor(this.props.hue, this.props.saturation, this.props.lightness)).toString();
    this.props.onClick(color);
  }

  // Clamped integer parsing. 
  // Returns 0 if not parsable.
  // Result always between 0..max (inclusive).
  private parseInteger(input: string, max: number) {
    let value = parseInt(input);
    if(isNaN(value)) value = 0;
    return Math.max(Math.min(value, max), 0);
  }

  private handleChangeHue(e: React.FormEvent<HTMLInputElement>) {
    let hue = this.parseInteger(e.currentTarget.value, 359);
    let hsl = new HslColor(hue, this.props.saturation, this.props.lightness);
    let rgb = RgbColor.FromHsl(hsl).toString();
    this.props.onChange(rgb);
  }

  private handleChangeSaturation(e: React.FormEvent<HTMLInputElement>) {
    let saturation = this.parseInteger(e.currentTarget.value, 100) / 100;
    let hsl = new HslColor(this.props.hue, saturation, this.props.lightness);
    let rgb = RgbColor.FromHsl(hsl).toString();
    this.props.onChange(rgb);
  }

  private handleChangeLightness(e: React.FormEvent<HTMLInputElement>) {
    let lightness = this.parseInteger(e.currentTarget.value, 100) / 100;
    let hsl = new HslColor(this.props.hue, this.props.saturation, lightness);
    let rgb = RgbColor.FromHsl(hsl).toString();
    this.props.onChange(rgb);
  }

  private handleChangeRed(e: React.FormEvent<HTMLInputElement>) {
    let red = this.parseInteger(e.currentTarget.value, 255);
    let hsl = new HslColor(this.props.hue, this.props.saturation, this.props.lightness);
    let rgb = RgbColor.FromHsl(hsl);
    rgb.red = red;
    this.props.onChange(rgb.toString());    
  }

  private handleChangeGreen(e: React.FormEvent<HTMLInputElement>) {
    let green = this.parseInteger(e.currentTarget.value, 255);
    let hsl = new HslColor(this.props.hue, this.props.saturation, this.props.lightness);
    let rgb = RgbColor.FromHsl(hsl);
    rgb.green = green;
    this.props.onChange(rgb.toString());    
  }  

  private handleChangeBlue(e: React.FormEvent<HTMLInputElement>) {
    let blue = this.parseInteger(e.currentTarget.value, 255);
    let hsl = new HslColor(this.props.hue, this.props.saturation, this.props.lightness);
    let rgb = RgbColor.FromHsl(hsl);
    rgb.blue = blue;
    this.props.onChange(rgb.toString());    
  }  
  
  private handleChangeHex(e: React.FormEvent<HTMLInputElement>) {
    let hex = '#' + e.currentTarget.value;
    let rgb = RgbColor.FromString(hex);
    this.props.onChange(rgb.toString());
  }

  // The RGB hex input is an uncontrolled component, because we want to
  // apply changes to it only on onBlur.
  // This is why we must use a ref to control it.
  private updateHex() {
    let hsl = new HslColor(this.props.hue, this.props.saturation, this.props.lightness, 1);
    let rgb = RgbColor.FromHsl(hsl);
    // Remove the '#' from the color string.
    this.inputRef.current.value = rgb.toString().substr(1).toUpperCase();
  }
  componentDidUpdate() {
    this.updateHex();
  }
  componentDidMount() {
    this.updateHex();
  }

  render() {
    let p = this.props;

    let hsl = new HslColor(p.hue, p.saturation, p.lightness, 1);
    let rgb = RgbColor.FromHsl(hsl);

    return (
      <div className={p.className}>
        <div style={{background: `${rgb.toString()}`, borderWidth: p.lightness > 0.9 ? '1px' : '0'}} onClick={this.handleClick}></div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>#</td>
                <td><input type="text" ref={this.inputRef} onBlur={this.handleChangeHex}/></td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>H</td>
                <td><input type="text" value={Math.round(p.hue).toString()} onChange={this.handleChangeHue}/></td>
              </tr>
              <tr>
                <td>S</td>
                <td><input type="text" value={Math.round(p.saturation * 100).toString()} onChange={this.handleChangeSaturation}/></td>
              </tr>
              <tr>
                <td>L</td>
                <td><input type="text" value={Math.round(p.lightness * 100).toString()} onChange={this.handleChangeLightness}/></td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>R</td>
                <td><input type="text" value={Math.round(rgb.red).toString()} onChange={this.handleChangeRed}/></td>
              </tr>
              <tr>
                <td>G</td>
                <td><input type="text" value={Math.round(rgb.green).toString()} onChange={this.handleChangeGreen}/></td>
              </tr>
              <tr>
                <td>B</td>
                <td><input type="text" value={Math.round(rgb.blue).toString()} onChange={this.handleChangeBlue}/></td>
              </tr>  
            </tbody>          
          </table>
        </div>
      </div>
    );
  }
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
    border: solid 1px #fff;
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

export { InfoBox };
