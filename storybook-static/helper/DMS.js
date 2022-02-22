/**
 * Degrees-Minutes-Seconds conversion helpers.
 */
var DMS = /** @class */ (function () {
    function DMS() {
    }
    /**
     * Convert a decimal latitude or longitude value to degrees,
     * minutes, and seconds.
     *
     * @param value Value to convert
     * @returns An array with degrees, minutes, seconds.
     */
    DMS.toDMS = function (value) {
        value = parseFloat(value);
        if (isNaN(value))
            value = 0;
        value = Math.abs(value);
        var degrees = Math.trunc(value);
        var seconds = (value - degrees) * 3600;
        // Seconds are multiplied by 10,000, rounded, then divided again to avoid float errors.
        var minutes = Math.trunc(Math.round((seconds / 60) * 10000) / 10000);
        seconds = Math.round(seconds) % 60;
        return [degrees, minutes, seconds];
    };
    /**
     * Convert degrees, minutes and seconds to a float value.
     * @param d Degrees
     * @param m Minutes
     * @param s Seconds
     * @returns Float representation
     */
    DMS.toFloat = function (d, m, s) {
        if (m < 0)
            m = 0;
        if (m > 59)
            m = 59;
        if (s < 0)
            s = 0;
        if (s > 59)
            s = 59;
        return d + m / 60 + s / 3600;
    };
    return DMS;
}());
export { DMS };
