import { darken } from './darken';

function lighten(amount: number, color: string): string {
  return darken(-amount, color);
}

export { lighten };