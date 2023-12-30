import * as React from 'react';
import styled from '../../../styles/Theme';

// Helpers
import { RgbColor } from '../../../helper/RgbColor';
import { HslColor } from '../../../helper/HslColor';

// Other controls
import { HarmonyElement } from './HarmonyElement';

interface IProps {
  /** @ignore */
  className?: string;
  type: 'complementary' | 'triadic' | 'tetradic' | 'analogous' | 'neutral' | 'shades' | 'tints';
  hue: number;
  saturation: number;
  lightness: number;
  onClick: (color: string) => void;
}

const HarmonyBoxBase = (props: IProps) => {
  let hsl: HslColor = new HslColor(props.hue, props.saturation, props.lightness);
  let colors: string[] = [];

  const addDegrees = (degrees: number) => {
    hsl.hue += degrees;
    if(hsl.hue < 0) hsl.hue += 360;
    if(hsl.hue > 360) hsl.hue -= 360;
    colors.push(RgbColor.FromHsl(hsl).toString());
  }

  switch(props.type) {
    case 'complementary':
      addDegrees(0);
      addDegrees(180);
      break;
    case 'triadic':
      addDegrees(0);
      addDegrees(120);
      addDegrees(120);
      break;
    case 'tetradic':
      addDegrees(0);
      addDegrees(180);
      addDegrees(60);
      addDegrees(180);
      break;
    case 'analogous':
      addDegrees(0);
      for(let i = 0; i < 5; i++) addDegrees(30);
      break;
    case 'neutral':
      addDegrees(0);
      for(let i = 0; i < 5; i++) addDegrees(15);
      break;
    case 'shades':
      var lightness = hsl.lightness;
      colors.push(RgbColor.FromHsl(hsl).toString());
      for(let i = 7; i >= 1; i--) {
        hsl.lightness = lightness / 8 * i;
        colors.push(RgbColor.FromHsl(hsl).toString());
      }
      break;
    case 'tints':
      var lightness = hsl.lightness;
      var diff = 1 - lightness;
      colors.push(RgbColor.FromHsl(hsl).toString());
      for(let i = 1; i <= 7; i++) {
        hsl.lightness = lightness + (diff) / 8 * i;
        colors.push(RgbColor.FromHsl(hsl).toString());
      }     
      break;   
  }

  return (
    <div className={props.className}>
      {colors.map((color, i) => {
        return (<HarmonyElement key={i} color={color} onClick={() => props.onClick(color)}/>)
      })}
    </div>
  );
}

const HarmonyBox = styled(HarmonyBoxBase)`
  position: relative;
  display: flex;
`

export { HarmonyBox }
