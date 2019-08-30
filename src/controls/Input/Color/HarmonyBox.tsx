import * as React from 'react';
import styled from '../../../styles/Theme';
import { HarmonyElement } from './HarmonyElement';
import { RgbColor } from '../../../helper/RgbColor';
import { HslColor } from '../../../helper/HslColor';

interface IHarmonyBoxProps {
  className?: string;
  type: 'complementary' | 'triadic' | 'tetradic' | 'analogous' | 'neutral' | 'shades' | 'tints';
  hue: number;
  saturation: number;
  lightness: number;
  onClick: (color:string) => void;
}

class HarmonyBoxBase extends React.Component<IHarmonyBoxProps, {}> {
  private hsl: HslColor;
  private colors: string[];

  private handleClick(color: string) {
    this.props.onClick(color);
  }

  private addDegrees(degrees: number) {
    this.hsl.hue += degrees;
    if(this.hsl.hue < 0) this.hsl.hue += 360;
    if(this.hsl.hue > 360) this.hsl.hue -= 360;
    this.colors.push(RgbColor.FromHsl(this.hsl).toString());
  }

  render() {
    let p = this.props;

    this.hsl = new HslColor(p.hue, p.saturation, p.lightness);
    this.colors = [];

    switch(p.type) {
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
        for(let i = 0; i < 5; i++) this.addDegrees(30);
        break;
      case 'neutral':
        this.addDegrees(0);
        for(let i = 0; i < 5; i++) this.addDegrees(15);
        break;
      case 'shades':
        var lightness = this.hsl.lightness;
        this.colors.push(RgbColor.FromHsl(this.hsl).toString());
        for(let i = 7; i >= 1; i--) {
          this.hsl.lightness = lightness / 8 * i;
          this.colors.push(RgbColor.FromHsl(this.hsl).toString());
        }
        break;
      case 'tints':
        var lightness = this.hsl.lightness;
        var diff = 1 - lightness;
        this.colors.push(RgbColor.FromHsl(this.hsl).toString());
        for(let i = 1; i <= 7; i++) {
          this.hsl.lightness = lightness + (diff) / 8 * i;
          this.colors.push(RgbColor.FromHsl(this.hsl).toString());
        }     
        break;   
    }

    return (
      <div className={p.className}>
        {this.colors.map((color, i) => {
          return (<HarmonyElement key={i} color={color} onClick={this.handleClick.bind(this, color)}/>)
        })}
      </div>
    );
  }
}

const HarmonyBox = styled(HarmonyBoxBase)`
  position: relative;
  display: flex;
`

export { HarmonyBox };
