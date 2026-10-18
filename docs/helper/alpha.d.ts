/**
 * Adds an alpha component to a color.
 * @param amount Alpha value to add (0-1).
 * @param color Color in RGB format, e.g. "red" or "#ff0000".
 * @returns Alphaized color in RGB format.
 */
declare function alpha(amount: number, color: string): string;
export { alpha };
