import * as React from 'react';

interface IEUIProps {
  className?: string;
  /** Value to format. */
  value: string | number;
}

class EUI extends React.Component<IEUIProps, {}> {
  render() {
    let p = this.props;

    // Do nothing for null value.
    if(p.value == null) return null;

    // If value is a number, convert it to a hex string.
    // If not a number, simply convert to string.
    let val = (typeof p.value === 'number') ? p.value.toString(16) : (p.value + '');
    console.log(val);

    // Split string into 2-character parts:
    let parts = val.toUpperCase().match(/.{1,2}/g);
    return parts.join('-');
  }
}

export { EUI };
