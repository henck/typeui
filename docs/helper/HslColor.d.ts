import { RgbColor } from './RgbColor';
declare class HslColor {
    hue: number;
    saturation: number;
    lightness: number;
    alpha: number;
    constructor(hue: number, saturation: number, lightness: number, alpha?: number);
    static FromRgb(color: RgbColor): HslColor;
    toString(): string;
}
export { HslColor };
