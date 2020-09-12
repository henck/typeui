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
import { ISwatch } from './Swatch';
import { HarmonyBox } from './HarmonyBox';
import { Tabs } from '../../Tabs/Tabs';
import { Button } from '../../Button/Button';

interface ISelectorProps {
  className?: string;
  value: string;
  // If true, selector opens above the input.
  upward: boolean;
  // If true, selector opens to the right of the input.
  right: boolean;

  onSelect: any;
}

interface ISelectorState {
  hue: number;
  hsv_saturation: number;
  hsv_brightness: number;
  hsl_saturation: number;
  hsl_lightness: number;
  swatches: ISwatch[];
}

type MouseType = 'none' | 'hue' | 'color';

class SelectorBase extends React.Component<ISelectorProps, ISelectorState> {
  private mouseType: MouseType = 'none';
  private mouseX: number;
  private offsetX: number;
  private mouseWidth: number;
  private mouseY: number;
  private offsetY: number;
  private mouseHeight: number;

  constructor(props: ISelectorProps) {
    super(props);
    this.handleHueMouseDown = this.handleHueMouseDown.bind(this);
    this.handleColorMouseDown = this.handleColorMouseDown.bind(this);
    this.handleClickSwatch = this.handleClickSwatch.bind(this);
    this.handleToggleSwatch = this.handleToggleSwatch.bind(this);
    this.handleClickColor = this.handleClickColor.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleClickHarmony = this.handleClickHarmony.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      ...this.getStateFromColor(this.props.value),
      ...{
        swatches: this.loadSwatches()
      }
    };
  }

  // Restore all swatches from local storage.
  // Uses default colors for missing swatches.
  private loadSwatches(): ISwatch[] {
    let swatches: ISwatch[] = [];
    for(let i = 0; i < 10; i++) {
      let swatch: ISwatch = {
        color: localStorage.getItem(`swatch${i}_color`) || this.defaultColors()[i],
        locked: localStorage.getItem(`swatch${i}_locked`) === 'locked' || false
      };
      swatches.push(swatch);
    }
    return swatches;
  }

  // Save all swatches to local storage.
  private saveSwatches(swatches: ISwatch[]) {
    for(let i = 0; i < 10; i++) {
      localStorage.setItem(`swatch${i}_color`, swatches[i].color);
      localStorage.setItem(`swatch${i}_locked`, swatches[i].locked ? 'locked' : 'unlocked');
    }
  }  

  private defaultColors() {
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

  private getStateFromColor(color: string) {
    let rgb: RgbColor = RgbColor.FromString(color);
    let hsl: HslColor = HslColor.FromRgb(rgb);
    let [s,v] = this.sl_to_sv(hsl.saturation, hsl.lightness);    

    return {
      hue: hsl.hue,
      hsv_saturation: s,
      hsv_brightness: v,
      hsl_saturation: hsl.saturation,
      hsl_lightness: hsl.lightness,
    };
  }  

  private sv_to_sl(s:number, v:number) {
    // both hsv and hsl values are in [0, 1]
    var l = (2 - s) * v / 2;
    if (l != 0) {
        if (l == 1) {
            s = 0
        } else if (l < 0.5) {
            s = s * v / (l * 2)
        } else {
            s = s * v / (2 - l * 2)
        }
    }
    return [s, l]
  }  

  private sl_to_sv(s: number, l:number) {
    let v = s*Math.min(l,1-l)+l;
    s = v?2-2*l/v:0;
    return [s, v];
  }  

  handleMouseMove(e:MouseEvent) {
    if(this.mouseType === 'hue') {
      this.setHue(e.clientY - this.offsetY);
    }
    if(this.mouseType === 'color') {
      this.setColor(e.clientX - this.offsetX, e.clientY - this.offsetY);
    }
  }

  handleMouseUp(e:MouseEvent) {
    this.mouseType = 'none';
  }  

  handleHueMouseDown(data: { mouseY:number, offsetY: number, height: number}) {
    this.mouseType = 'hue';
    this.mouseY = data.mouseY;
    this.offsetY = data.offsetY;
    this.mouseHeight = data.height;
    this.setHue(this.mouseY);
  }

  handleColorMouseDown(data: { mouseX: number, offsetX: number, width: number, mouseY: number, offsetY: number, height: number}) {
    this.mouseType = 'color';
    this.mouseX = data.mouseX;
    this.offsetX = data.offsetX;
    this.mouseWidth = data.width;
    this.mouseY = data.mouseY;
    this.offsetY = data.offsetY;    
    this.mouseHeight = data.height;
    this.setColor(this.mouseX, this.mouseY);
  }

  private handleClickSwatch(idx: number) {
    this.setState(this.getStateFromColor(this.state.swatches[idx].color));
  }

  private handleClickHarmony(color: string) {
    this.addSwatch(color);
  }

  private handleToggleSwatch(idx: number) {
    this.setState((prevState: ISelectorState) => {
      let swatches = prevState.swatches;
      swatches[idx].locked = !swatches[idx].locked;
      this.saveSwatches(swatches);
      return {
        swatches: swatches
      }
    });
  }

  private handleClickColor(color: string) {
    this.addSwatch(color);
  }  

  private handleChangeColor(color: string) {
    let rgb = RgbColor.FromString(color);
    let hsl = HslColor.FromRgb(rgb);
    let [s,v] = this.sl_to_sv(hsl.saturation, hsl.lightness);
    this.setState({
      hue: hsl.hue,
      hsv_saturation: s,
      hsv_brightness: v,
      hsl_saturation: hsl.saturation,
      hsl_lightness: hsl.lightness
    });
  }

  private handleSelect(e: React.MouseEvent) {
    e.stopPropagation();
    this.props.onSelect(RgbColor.FromHsl(new HslColor(this.state.hue, this.state.hsl_saturation, this.state.hsl_lightness)).toString());
  }
  
  private handleCancel(e: React.MouseEvent) {
    e.stopPropagation();
    this.props.onSelect(null);
  }

  private setHue(y:number) {
    this.setState({
      hue: Math.min(Math.max(Math.floor(y / this.mouseHeight * 360), 0), 359.99)
    });
  }  

  private addSwatch(color: string) {
    let swatches = this.state.swatches;
    // Find index of rightmost unlocked swatch.
    let idx = swatches.map(s => s).reverse().findIndex((s) => !s.locked);
    // If there is no unlocked swatch, then abort.
    if(idx === -1) return;
    // Remove rightmost unlocked swatch.
    swatches.splice(9-idx, 1);
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
    })
  }

  private setColor(x:number, y:number) {
    let hsv_s = Math.max(Math.min(1, x / this.mouseWidth), 0);
    let hsv_b = Math.max(Math.min(1, 1 - y / this.mouseHeight), 0);
    let [hsl_s, hsl_l] = this.sv_to_sl(hsv_s, hsv_b);
    this.setState({
      hsv_saturation: hsv_s,
      hsv_brightness: hsv_b,
      hsl_saturation: hsl_s,
      hsl_lightness:  hsl_l
    });
  }  

  componentDidMount() {
    // Add document-wide event listener for mouse move/up.
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  componentWillUnmount() {
    // Remove document-wide event listener for mouse move/up.
    document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    document.removeEventListener('mouseup', this.handleMouseUp.bind(this));
  }  

  render() {
    let p = this.props;

    return (
      <div className={p.className}>
        <div>
          <div style={{display: 'inline-flex'}}>
            <ColorBox hue={this.state.hue} saturation={this.state.hsv_saturation} brightness={this.state.hsv_brightness} onMouseDown={this.handleColorMouseDown}/>
            <HueBox hue={this.state.hue} onMouseDown={this.handleHueMouseDown}/>
            <InfoBox hue={this.state.hue} saturation={this.state.hsl_saturation} lightness={this.state.hsl_lightness} onClick={this.handleClickColor} onChange={this.handleChangeColor}/>
            <SwatchBox swatches={this.state.swatches} onClick={this.handleClickSwatch} onToggle={this.handleToggleSwatch} />
          </div>
          <Tabs underlined>
            <Tabs.Pane label="Complementary">        
              <HarmonyBox type="complementary" hue={this.state.hue} saturation={this.state.hsl_saturation} lightness={this.state.hsl_lightness} onClick={this.handleClickHarmony}/>
            </Tabs.Pane>
            <Tabs.Pane label="Shades">        
              <HarmonyBox type="shades" hue={this.state.hue} saturation={this.state.hsl_saturation} lightness={this.state.hsl_lightness} onClick={this.handleClickHarmony}/>
            </Tabs.Pane>   
            <Tabs.Pane label="Tints">        
              <HarmonyBox type="tints" hue={this.state.hue} saturation={this.state.hsl_saturation} lightness={this.state.hsl_lightness} onClick={this.handleClickHarmony}/>
            </Tabs.Pane>                    
          </Tabs>
        </div>
        <div>
          <Button primary onClick={this.handleSelect}>Select</Button>
          <Button secondary onClick={this.handleCancel}>Cancel</Button>
        </div>        
      </div>
    );
  }
}

const Selector = styled(SelectorBase)`
  position: absolute;
  z-index: 99; /* Must be positioned over everything else */
  ${p => p.right && css`right: 0;`}
  ${p => !p.right && css`left: 0;`}
  ${p => p.upward && css`bottom: 42px;`}
  ${p => !p.upward && css`top: 42px;`}
  background: #fff;
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
    background: ${p => lighten(0.1, p.theme.normalColor)};    
    border-bottom-left-radius: ${p => p.theme.radius}px;
    border-bottom-right-radius: ${p => p.theme.radius}px;
  }

  ${p => p.right && p.upward && css`transform-origin: bottom right;`}
  ${p => !p.right && p.upward && css`transform-origin: bottom left;`}
  ${p => p.right && !p.upward && css`transform-origin: top right;`}
  ${p => !p.right && !p.upward && css`transform-origin: top left;`}

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
`

export { Selector };
