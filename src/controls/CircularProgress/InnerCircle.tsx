import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface IProps {
  /** @ignore */
  className?: string;
  radius: number;
  raised?: boolean;
}

const InnerCircleBase = (props: IProps) => <div className={props.className}/>

/**
 * Inner circle hides segment centers, and provides a place to show the percentage number.
 */
const InnerCircle = styled(InnerCircleBase)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: ${p => p.radius * 2}px;
  height: ${p => p.radius * 2}px;
  transform: translateX(-50%) translateY(-50%);
  background: #fff;
  border-radius: 50%;
  ${p => p.raised && css`box-shadow: inset rgba(34, 36, 38, 0.15) 0px 0px 3px 2px`};
`

export { InnerCircle }
