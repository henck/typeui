import * as React from 'react';

interface INumberProps {
  className?: string;
  children?: React.ReactNode;
  /** Value to format. */
  value: number | string;
  /**
   * Number of fractional digits. Default 2.
   */
  decimals?: number;
}

class Number extends React.Component<INumberProps, {}> {
  render() {
    let p = this.props;

    if(p.value == null) return null;

    // Make sure value is a number.
    let val = (typeof p.value === 'string') ? parseFloat(p.value) : p.value;

    // Fix number of decimals.
    let str = val.toFixed(p.decimals == null || p.decimals == undefined ? 2 : p.decimals);

    // Add thousand separators.
    str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return str;
  }
}

export { Number };
