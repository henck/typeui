/**
 * Darkens an input color by an amount.
 * @param amount Amount of lightness to reduce.
 * @param color Color in RGB format, e.g. "red" or "#ff0000".
 * @returns Darkened color in RGB format.
 */
declare function darken(amount: number, color: string): string;
export { darken };
