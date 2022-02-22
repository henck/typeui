var HslColor = /** @class */ (function () {
    function HslColor(hue, saturation, lightness, alpha) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha || 1;
    }
    HslColor.FromRgb = function (color) {
        var red = color.red / 255;
        var green = color.green / 255;
        var blue = color.blue / 255;
        var max = Math.max(red, green, blue);
        var min = Math.min(red, green, blue);
        var lightness = (max + min) / 2;
        if (max === min) {
            // achromatic
            return new HslColor(0, 0, lightness, color.alpha);
        }
        var hue;
        var delta = max - min;
        var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
        switch (max) {
            case red:
                hue = (green - blue) / delta + (green < blue ? 6 : 0);
                break;
            case green:
                hue = (blue - red) / delta + 2;
                break;
            default:
                // blue case
                hue = (red - green) / delta + 4;
                break;
        }
        hue *= 60;
        return new HslColor(hue, saturation, lightness, color.alpha);
    };
    HslColor.prototype.toString = function () {
        if (this.alpha === 1) {
            return "hsl(".concat(this.hue, ", ").concat(Math.round(this.saturation * 100), "%, ").concat(Math.round(this.lightness * 100), "%)");
        }
        else {
            return "hsla(".concat(this.hue, ", ").concat(Math.round(this.saturation * 100), "%, ").concat(Math.round(this.lightness * 100), "%, ").concat(this.alpha, ")");
        }
    };
    return HslColor;
}());
export { HslColor };
