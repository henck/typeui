/**
 * Forces a numeric value to fall within a range.
 */
function guard(lowerBoundary, upperBoundary, value) {
    return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
export { guard };
