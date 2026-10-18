import { guard } from './guard';
import { RgbColor } from './RgbColor';
import { HslColor } from './HslColor';
/**
 * Darkens an input color by an amount.
 * @param amount Amount of lightness to reduce.
 * @param color Color in RGB format, e.g. "red" or "#ff0000".
 * @returns Darkened color in RGB format.
 */
function darken(amount, color) {
    if (color === 'transparent')
        return color;
    let rgbColor = RgbColor.FromString(color);
    let hslColor = HslColor.FromRgb(rgbColor);
    hslColor.lightness = guard(0, 1, hslColor.lightness - amount);
    return RgbColor.FromHsl(hslColor).toString();
}
export { darken };
