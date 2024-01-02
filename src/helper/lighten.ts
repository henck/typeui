import { darken } from './darken';

/**
 * Lightens an input color by an amount.
 * @param amount Amount of lightness to increase.
 * @param color Color in RGB format, e.g. "red" or "#ff0000".
 * @returns Lightened color in RGB format.
 */
function lighten(amount: number, color: string): string {
  return darken(-amount, color);
}

export { lighten }