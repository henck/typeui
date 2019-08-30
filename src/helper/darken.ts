import { guard } from './guard';
import { RgbColor } from './RgbColor';
import { HslColor } from './HslColor';

function darken(amount: number, color: string): string {
  if (color === 'transparent') return color;
  let rgbColor: RgbColor = RgbColor.FromString(color);
  let hslColor: HslColor = HslColor.FromRgb(rgbColor);
  hslColor.lightness = guard(0, 1, hslColor.lightness - amount);
  return RgbColor.FromHsl(hslColor).toString();
}

export { darken };