import { nameToHex } from './nameToHex';
import { HslColor } from './HslColor';

class RgbColor {
  red: number;
  blue: number;
  green: number;
  alpha: number;

  /** Construct an RgbColor instance.
   *  If alpha is not provided, it is assumed to be 1 (opaque).
   */
  public constructor(red: number, green: number, blue: number, alpha?: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha || 1;
  }

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
  public static FromString(color: string) {
    const hexRegex = /^#[a-fA-F0-9]{6}$/
    const hexRgbaRegex = /^#[a-fA-F0-9]{8}$/
    const reducedHexRegex = /^#[a-fA-F0-9]{3}$/
    const reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/
    const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
    const rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/
    const hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/
    const hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/    

    // If the color is not even a string, make it white.
    if(typeof color !== "string") color = "#ffffff";
        
    // This may be a named color. Convert it to hex first.
    const normalizedColor = nameToHex(color);
    if (normalizedColor.match(hexRegex)) {
      return new RgbColor(
        parseInt(`${normalizedColor[1]}${normalizedColor[2]}`, 16),
        parseInt(`${normalizedColor[3]}${normalizedColor[4]}`, 16),
        parseInt(`${normalizedColor[5]}${normalizedColor[6]}`, 16)
      );
    }
    if (normalizedColor.match(hexRgbaRegex)) {
      const alpha = parseFloat(
        (
          parseInt(`${normalizedColor[7]}${normalizedColor[8]}`, 16) / 255
        ).toFixed(2)
      );
      return new RgbColor(
        parseInt(`${normalizedColor[1]}${normalizedColor[2]}`, 16),
        parseInt(`${normalizedColor[3]}${normalizedColor[4]}`, 16),
        parseInt(`${normalizedColor[5]}${normalizedColor[6]}`, 16),
        alpha
      );
    }
    if (normalizedColor.match(reducedHexRegex)) {
      return new RgbColor(
        parseInt(`${normalizedColor[1]}${normalizedColor[1]}`, 16),
        parseInt(`${normalizedColor[2]}${normalizedColor[2]}`, 16),
        parseInt(`${normalizedColor[3]}${normalizedColor[3]}`, 16)
      );
    }
    if (normalizedColor.match(reducedRgbaHexRegex)) {
      const alpha = parseFloat(
        (
          parseInt(`${normalizedColor[4]}${normalizedColor[4]}`, 16) / 255
        ).toFixed(2)
      )
      return new RgbColor (
        parseInt(`${normalizedColor[1]}${normalizedColor[1]}`, 16),
        parseInt(`${normalizedColor[2]}${normalizedColor[2]}`, 16),
        parseInt(`${normalizedColor[3]}${normalizedColor[3]}`, 16),
        alpha
      );
    }
    const rgbMatched = rgbRegex.exec(normalizedColor)
    if (rgbMatched) {
      return new RgbColor(
        parseInt(`${rgbMatched[1]}`, 10),
        parseInt(`${rgbMatched[2]}`, 10),
        parseInt(`${rgbMatched[3]}`, 10)
      );
    }
    const rgbaMatched = rgbaRegex.exec(normalizedColor)
    if (rgbaMatched) {
      return new RgbColor(
        parseInt(`${rgbaMatched[1]}`, 10),
        parseInt(`${rgbaMatched[2]}`, 10),
        parseInt(`${rgbaMatched[3]}`, 10),
        parseFloat(`${rgbaMatched[4]}`)
      );
    }
    const hslMatched = hslRegex.exec(normalizedColor)
    if (hslMatched) {
      const hue = parseInt(`${hslMatched[1]}`, 10);
      const saturation = parseInt(`${hslMatched[2]}`, 10) / 100;
      const lightness = parseInt(`${hslMatched[3]}`, 10) / 100;
      const hsl = new HslColor(hue, saturation, lightness);
      return RgbColor.FromHsl(hsl);
    }    
    const hslaMatched = hslaRegex.exec(normalizedColor)
    if (hslaMatched) {
      const hue = parseInt(`${hslaMatched[1]}`, 10)
      const saturation = parseInt(`${hslaMatched[2]}`, 10) / 100
      const lightness = parseInt(`${hslaMatched[3]}`, 10) / 100
      const alpha = parseFloat(`${hslaMatched[4]}`);
      const hsl = new HslColor(hue, saturation, lightness, alpha);
      return RgbColor.FromHsl(hsl);
    }
    
    // console.error("RgbColor.FromString parse error for: " + color);
    // In case of parse error, assume white.
    return new RgbColor(255, 255,255);
  }

  /**
   * Convert a HslColor instance to an RgbColor instance.
   */
  public static FromHsl(color: HslColor): RgbColor {
    if (color.saturation === 0) {
      // achromatic
      return new RgbColor(Math.round(color.lightness * 255), Math.round(color.lightness * 255), Math.round(color.lightness * 255), color.alpha);
    }
  
    // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
    const huePrime = color.hue % 360 / 60;
    const chroma = (1 - Math.abs(2 * color.lightness - 1)) * color.saturation;
    const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  
    let red = 0;
    let green = 0;
    let blue = 0;
  
    if (huePrime >= 0 && huePrime < 1) {
      red = chroma;
      green = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
      red = secondComponent;
      green = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
      green = chroma;
      blue = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
      green = secondComponent;
      blue = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      red = secondComponent;
      blue = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
      red = chroma;
      blue = secondComponent;
    }
  
    const lightnessModification = color.lightness - chroma / 2;
    const finalRed = red + lightnessModification;
    const finalGreen = green + lightnessModification;
    const finalBlue = blue + lightnessModification;

    return new RgbColor(Math.round(finalRed * 255), Math.round(finalGreen * 255), Math.round(finalBlue * 255), color.alpha);
  }

  private toHex(value: number): string {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  /**
   * Reduces hex values if possible e.g. #ff8866 to #f86
   */
  private reduceHexValue = (value: string): string => {
    if (
      value.length === 7
      && value[1] === value[2]
      && value[3] === value[4]
      && value[5] === value[6]
    ) {
      return `#${value[1]}${value[3]}${value[5]}`;
    }
    return value;
  }  

  /**
   * Return string representation of this RgbColor instance.
   */
  public toString() {
    // Convert RGB to hex string.
    let hex = `#${this.toHex(this.red)}${this.toHex(this.green)}${this.toHex(this.blue)}`;
    if(this.alpha !== 1) {
      hex += `${this.toHex(Math.round(this.alpha * 255))}`;
    }
    // Reduce #FFFFFF to #FFF if possible:
    return this.reduceHexValue(hex);
  }
}

export { RgbColor };