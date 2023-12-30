import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { Ripple } from '../Ripple';

interface IRowProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Row top offset in pixels. */
  top: number;
  /** Event is fired when row is clicked. */
  onClick?: () => void;
}

const RowBase = (props: IRowProps) => {
  return (
    // If row is clickable, wrap in a Ripple:
    props.onClick ? 
      <Ripple type='div' className={props.className} style={{top: props.top + 'px'}} onClick={props.onClick}>{props.children}</Ripple>
    : 
      <div className={props.className} style={{top: props.top + 'px'}} onClick={props.onClick}>{props.children}</div>
  );
}

const RowStyled = styled(RowBase)`
  position: absolute;
  display: flex;
  width: 100%;
  background-color: ${p => p.theme.background};
  &:not(:last-child) {
    border-bottom: solid 1px ${p => p.theme.normalColor};
  }
  ${p => p.onClick && css`
    cursor: pointer;
    transition: background-color ${p => p.theme.transition.duration}s ease;
    &:hover {
      background-color: #f9f9f9;
    }
  `}
`

const Row = (props: IRowProps) => <RowStyled {...props}/>

export { Row, IRowProps }
