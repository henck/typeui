import { darken } from './darken';
function lighten(amount, color) {
    return darken(-amount, color);
}
export { lighten };
