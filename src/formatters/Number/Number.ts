import * as React from 'react';

interface INumberProps {
  className?: string;
  children?: React.ReactNode;
  /** Value to format. This can be a string or a number. */
  value: number | string;
  /** Number of fractional digits. Defaults to `2`. */
  decimals?: number;
}

class Number extends React.Component<INumberProps, {}> {
  render() {
    let p = this.props;

    if(p.value == null) return null;

    // Make sure value is a number.
    let val = (typeof p.value === 'string') ? parseFloat(p.value) : p.value;

    // Get number of requested fraction digits:
    let decimals = p.decimals == null || p.decimals == undefined ? 2 : p.decimals;

    // Format number with requested fraction digits:
    return val.toLocaleString(undefined, { 
      useGrouping: true, 
      minimumFractionDigits: decimals, 
      maximumFractionDigits: decimals });
  }
}

export { Number };
