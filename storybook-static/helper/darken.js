import { guard } from './guard';
import { RgbColor } from './RgbColor';
import { HslColor } from './HslColor';
function darken(amount, color) {
    if (color === 'transparent')
        return color;
    var rgbColor = RgbColor.FromString(color);
    var hslColor = HslColor.FromRgb(rgbColor);
    hslColor.lightness = guard(0, 1, hslColor.lightness - amount);
    return RgbColor.FromHsl(hslColor).toString();
}
export { darken };
