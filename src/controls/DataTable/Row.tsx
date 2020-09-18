import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { Ripple } from '../Ripple';

interface IRowProps {
  className?: string;
  children?: React.ReactNode;
  /** Row top offset in pixels. */
  top: number;
  /** Event is fired when row is clicked. */
  onClick?: () => void;
}

class RowBase extends React.Component<IRowProps> {
  render() {
    let p = this.props;
    return (
      // If row is clickable, wrap in a Ripple:
      p.onClick ? 
        <Ripple type='div' className={p.className} style={{top: p.top + 'px'}} onClick={p.onClick}>{p.children}</Ripple>
      : 
        <div className={p.className} style={{top: p.top + 'px'}} onClick={p.onClick}>{p.children}</div>
    );
  }
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

class Row extends React.PureComponent<IRowProps> {
  render() {
    return <RowStyled {...this.props}/>
  }
}

export { Row };
