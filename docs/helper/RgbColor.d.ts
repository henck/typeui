import { HslColor } from './HslColor';
/**
 * `RgbColor` encapsulates an RGB color, optionally with an alpha component.
 * It offers parsing from and to a HTML color string.
 */
declare class RgbColor {
    red: number;
    blue: number;
    green: number;
    alpha: number;
    /** Construct an RgbColor instance.
     *  If alpha is not provided, it is assumed to be 1 (opaque).
     */
    constructor(red: number, green: number, blue: number, alpha?: number);
    /** Parses a color string into an RgbColor instance.
     *  Color strings may be:
     *
     *  SteelBlue (and friends)
     *  #RRGGBB
     *  #RRGGBBAA
     *  #RGB
     *  #RGBA
     *  rgb(r,g,b)
     *  rgba(r,g,b,a)
     *  hsl(h,s,l)
     *  hsla(h,s,l,a)
     */
    static FromString(color: string): RgbColor;
    /**
     * Convert a HslColor instance to an RgbColor instance.
     */
    static FromHsl(color: HslColor): RgbColor;
    private toHex;
    /**
     * Reduces hex values if possible e.g. #ff8866 to #f86
     */
    private reduceHexValue;
    /**
     * Return string representation of this RgbColor instance.
     */
    toString(): string;
}
export { RgbColor };
