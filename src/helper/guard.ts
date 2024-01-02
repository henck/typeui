/**
 * Forces a numeric value to fall within a range.
 */
function guard(
  lowerBoundary: number,
  upperBoundary: number,
  value: number,
): number {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

export { guard }
