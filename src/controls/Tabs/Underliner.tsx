import * as React from 'react';
import styled from '../../styles/Theme';

interface IUnderlinerProps {
  /** @ignore */
  className?: string;
  setRef?: any;
}

const UnderlinerBase = (props: IUnderlinerProps) =>
  <div className={props.className} ref={props.setRef}></div>

const Underliner = styled(UnderlinerBase)`
  position: absolute;
  left: 0;
  top: 38px;
  width: 0px;
  height: 0px;
  border-top: solid 2px ${p => p.theme.primaryColor};
  box-sizing: border-box;
  transition: left ease .3s, width ease .3s;
`

export { Underliner }
