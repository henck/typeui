import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../../styles/Theme';

interface IProps {
  className?: string;
  /** Hand angle in degrees (0..359 */
  degrees: number;
  /** If set, hand is animated. */
  animation: boolean;
}

class HandBase extends React.Component<IProps> {
  render() {
    let p = this.props;
    return <div className={p.className}>
      <Line>
        <Selector/>
      </Line>
    </div>
  }
}

const Selector = styled('div')`
  position:      absolute;
  top:           -12.5px;
  right:         -12.5px;
  width:         25px;
  height:        25px;
  border-radius: 50%;
  background:    ${p => p.theme.primaryColor};
  /* White circle in center of selector */
  &:after {
    content:       "";
    position:      absolute;
    left:          calc(50% - 1px);
    top:           calc(50% - 1px);
    width:         3px;
    height:        3px;
    border-radius: 50%;
    background:  #fff;
  }
`

const Hand = styled(HandBase)`
  position:   absolute;
  left:       calc(25% + 1px);
  top:        25%;
  width:      50%;
  height:     50%;
  background: ${p => p.theme.normalColor};
  border-radius: 50%;
  transform-origin: 50% 50%;
  transition: transform ${p => p.animation ? 0.2 : 0}s ease;
  transform: rotateZ(${p => p.degrees - 90}deg);
  /* If a number is currently selected, hide the disc in the middle
   * of the selector. */
  ${p => p.degrees % 30 == 0 && css`
    ${Selector} {
      &:after {
        display: none;
      }
    }
  `}
`

const Line = styled('div')`
  position: absolute;
  left:     50%;
  top:      50%;
  width:    80%;
  height:   0;
  &:after {
    content:    '';
    position:   absolute;
    left:       0;
    top:        -0.5px;
    width:      100%;
    height:     1px;
    background: ${p => p.theme.primaryColor}
  }
`

export { Hand }
