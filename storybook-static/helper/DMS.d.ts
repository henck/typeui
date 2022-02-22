/**
 * Degrees-Minutes-Seconds conversion helpers.
 */
declare class DMS {
    /**
     * Convert a decimal latitude or longitude value to degrees,
     * minutes, and seconds.
     *
     * @param value Value to convert
     * @returns An array with degrees, minutes, seconds.
     */
    static toDMS: (value: number) => number[];
    /**
     * Convert degrees, minutes and seconds to a float value.
     * @param d Degrees
     * @param m Minutes
     * @param s Seconds
     * @returns Float representation
     */
    static toFloat: (d: number, m: number, s: number) => number;
}
export { DMS };
