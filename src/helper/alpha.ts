import { guard } from './guard';
import { RgbColor } from './RgbColor';

/**
 * Adds an alpha component to a color.
 * @param amount Alpha value to add (0-1).
 * @param color Color in RGB format, e.g. "red" or "#ff0000".
 * @returns Alphaized color in RGB format.
 */
function alpha(amount: number, color: string): string {
  amount = guard(0, 1, amount);
  if (color === 'transparent') return color;
  let rgbColor: RgbColor = RgbColor.FromString(color);
  rgbColor.alpha = amount;
  return rgbColor.toString();
}

export { alpha }
