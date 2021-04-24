import * as React from 'react';
import styled from '../../../styles/Theme';

interface IProps {
  className?: string;
  /** Value to show */
  value: string;
  /** Location of number in degrees (0 = top) */
  degrees: number;
  /** Is the clock number currently selected? */
  active: boolean;
}

/**
 * A ClockNumber is a number on the face of the clock.
 */
class ClockNumberBase extends React.Component<IProps> {
  render() {
    let p = this.props;
    return <div className={p.className}><ClockValue>{p.value}</ClockValue></div>
  }
}

const ClockNumber = styled(ClockNumberBase).attrs(p => ({
  left: 50 + Math.cos((p.degrees-90) * Math.PI/180) * 40,
  top:  50 + Math.sin((p.degrees-90) * Math.PI/180) * 40,
  // The "3" and the "9" are slightly offset. Fix this:
  yFix: ((p.degrees >= 88 && p.degrees <= 92) || (p.degrees >= 268 && p.degrees <= 272)) ? 1 : 0
}))`
  position: absolute;
  left: calc(${p => p.left}% + ${p => p.yFix}px);
  top:  calc(${p => p.top}% + ${p => p.yFix}px);
  color: ${p => p.active ? 'white' : 'inherit'};
  font-weight: ${p => p.active ? 500 : 'inherit'};
`

const ClockValue = styled('div')`
  position: absolute;
  left: -12.5px;
  top: -0.6em;
  width: 25px;
  height: 1.2em;
  line-height: 1.2em;
  text-align: center;
  user-select: none;
`

export { ClockNumber }