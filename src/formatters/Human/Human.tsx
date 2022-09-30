import * as React from 'react';

interface IProps {
  /** 
   * File size in bytes 
   */
  value: number | string;  
}

/**
 * Human takes a value prop and renders it in a human-readable way.
 * 
 * E.g. 10000 => 10K
 */
class Human extends React.Component<IProps> {

  /** Convert number to size string (K, M, G etc.) */
  humanFileSize = (value: number) => {
    const thresh = 1000;
    if(Math.abs(value) < thresh) {
        return value.toFixed(0)
    }
    const units = ['K','M','G','T','P','E','Z','Y'];
    let u = -1;
    do {
      value /= thresh;
      ++u;
    } while(Math.abs(value) >= thresh && u < units.length - 1);
    return (+value).toFixed(2) + units[u];
  }

  render() {
    const p = this.props;

    if(p.value == null) return null;

    // Make sure value is a number.
    const val = (typeof p.value === 'string') ? parseFloat(p.value) : p.value;

    return this.humanFileSize(val);
  }
}

export { Human };
