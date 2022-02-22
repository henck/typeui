import { nameToHex } from './nameToHex';
import { HslColor } from './HslColor';
var RgbColor = /** @class */ (function () {
    /** Construct an RgbColor instance.
     *  If alpha is not provided, it is assumed to be 1 (opaque).
     */
    function RgbColor(red, green, blue, alpha) {
        /**
         * Reduces hex values if possible e.g. #ff8866 to #f86
         */
        this.reduceHexValue = function (value) {
            if (value.length === 7
                && value[1] === value[2]
                && value[3] === value[4]
                && value[5] === value[6]) {
                return "#".concat(value[1]).concat(value[3]).concat(value[5]);
            }
            return value;
        };
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
    RgbColor.FromString = function (color) {
        var hexRegex = /^#[a-fA-F0-9]{6}$/;
        var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
        var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
        var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
        var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
        var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
        var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
        var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
        // If the color is not even a string, make it white.
        if (typeof color !== "string")
            color = "#ffffff";
        // This may be a named color. Convert it to hex first.
        var normalizedColor = nameToHex(color);
        if (normalizedColor.match(hexRegex)) {
            return new RgbColor(parseInt("".concat(normalizedColor[1]).concat(normalizedColor[2]), 16), parseInt("".concat(normalizedColor[3]).concat(normalizedColor[4]), 16), parseInt("".concat(normalizedColor[5]).concat(normalizedColor[6]), 16));
        }
        if (normalizedColor.match(hexRgbaRegex)) {
            var alpha = parseFloat((parseInt("".concat(normalizedColor[7]).concat(normalizedColor[8]), 16) / 255).toFixed(2));
            return new RgbColor(parseInt("".concat(normalizedColor[1]).concat(normalizedColor[2]), 16), parseInt("".concat(normalizedColor[3]).concat(normalizedColor[4]), 16), parseInt("".concat(normalizedColor[5]).concat(normalizedColor[6]), 16), alpha);
        }
        if (normalizedColor.match(reducedHexRegex)) {
            return new RgbColor(parseInt("".concat(normalizedColor[1]).concat(normalizedColor[1]), 16), parseInt("".concat(normalizedColor[2]).concat(normalizedColor[2]), 16), parseInt("".concat(normalizedColor[3]).concat(normalizedColor[3]), 16));
        }
        if (normalizedColor.match(reducedRgbaHexRegex)) {
            var alpha = parseFloat((parseInt("".concat(normalizedColor[4]).concat(normalizedColor[4]), 16) / 255).toFixed(2));
            return new RgbColor(parseInt("".concat(normalizedColor[1]).concat(normalizedColor[1]), 16), parseInt("".concat(normalizedColor[2]).concat(normalizedColor[2]), 16), parseInt("".concat(normalizedColor[3]).concat(normalizedColor[3]), 16), alpha);
        }
        var rgbMatched = rgbRegex.exec(normalizedColor);
        if (rgbMatched) {
            return new RgbColor(parseInt("".concat(rgbMatched[1]), 10), parseInt("".concat(rgbMatched[2]), 10), parseInt("".concat(rgbMatched[3]), 10));
        }
        var rgbaMatched = rgbaRegex.exec(normalizedColor);
        if (rgbaMatched) {
            return new RgbColor(parseInt("".concat(rgbaMatched[1]), 10), parseInt("".concat(rgbaMatched[2]), 10), parseInt("".concat(rgbaMatched[3]), 10), parseFloat("".concat(rgbaMatched[4])));
        }
        var hslMatched = hslRegex.exec(normalizedColor);
        if (hslMatched) {
            var hue = parseInt("".concat(hslMatched[1]), 10);
            var saturation = parseInt("".concat(hslMatched[2]), 10) / 100;
            var lightness = parseInt("".concat(hslMatched[3]), 10) / 100;
            var hsl = new HslColor(hue, saturation, lightness);
            return RgbColor.FromHsl(hsl);
        }
        var hslaMatched = hslaRegex.exec(normalizedColor);
        if (hslaMatched) {
            var hue = parseInt("".concat(hslaMatched[1]), 10);
            var saturation = parseInt("".concat(hslaMatched[2]), 10) / 100;
            var lightness = parseInt("".concat(hslaMatched[3]), 10) / 100;
            var alpha = parseFloat("".concat(hslaMatched[4]));
            var hsl = new HslColor(hue, saturation, lightness, alpha);
            return RgbColor.FromHsl(hsl);
        }
        // console.error("RgbColor.FromString parse error for: " + color);
        // In case of parse error, assume white.
        return new RgbColor(255, 255, 255);
    };
    /**
     * Convert a HslColor instance to an RgbColor instance.
     */
    RgbColor.FromHsl = function (color) {
        if (color.saturation === 0) {
            // achromatic
            return new RgbColor(Math.round(color.lightness * 255), Math.round(color.lightness * 255), Math.round(color.lightness * 255), color.alpha);
        }
        // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
        var huePrime = color.hue % 360 / 60;
        var chroma = (1 - Math.abs(2 * color.lightness - 1)) * color.saturation;
        var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
        var red = 0;
        var green = 0;
        var blue = 0;
        if (huePrime >= 0 && huePrime < 1) {
            red = chroma;
            green = secondComponent;
        }
        else if (huePrime >= 1 && huePrime < 2) {
            red = secondComponent;
            green = chroma;
        }
        else if (huePrime >= 2 && huePrime < 3) {
            green = chroma;
            blue = secondComponent;
        }
        else if (huePrime >= 3 && huePrime < 4) {
            green = secondComponent;
            blue = chroma;
        }
        else if (huePrime >= 4 && huePrime < 5) {
            red = secondComponent;
            blue = chroma;
        }
        else if (huePrime >= 5 && huePrime < 6) {
            red = chroma;
            blue = secondComponent;
        }
        var lightnessModification = color.lightness - chroma / 2;
        var finalRed = red + lightnessModification;
        var finalGreen = green + lightnessModification;
        var finalBlue = blue + lightnessModification;
        return new RgbColor(Math.round(finalRed * 255), Math.round(finalGreen * 255), Math.round(finalBlue * 255), color.alpha);
    };
    RgbColor.prototype.toHex = function (value) {
        var hex = value.toString(16);
        return hex.length === 1 ? "0".concat(hex) : hex;
    };
    /**
     * Return string representation of this RgbColor instance.
     */
    RgbColor.prototype.toString = function () {
        // Convert RGB to hex string.
        var hex = "#".concat(this.toHex(this.red)).concat(this.toHex(this.green)).concat(this.toHex(this.blue));
        if (this.alpha !== 1) {
            hex += "".concat(this.toHex(Math.round(this.alpha * 255)));
        }
        // Reduce #FFFFFF to #FFF if possible:
        return this.reduceHexValue(hex);
    };
    return RgbColor;
}());
export { RgbColor };
