import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface IPanesProps {
  className?: string;
  children?: React.ReactNode;
  underlined?: boolean;
}

//
// Container for Tabs Panes.
//
class PanesBase extends React.Component<IPanesProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    )
  }
}

const Panes = styled(PanesBase)`
  height: 100%;
  flex: 1;
  padding-top: 14px;
  border-bottom-left-radius: ${p => p.theme.radius}px;
  border-bottom-right-radius: ${p => p.theme.radius}px;

  /* Non-underlined panes have a border around them. */
  ${p => !p.underlined && css`
    padding: 14px;
    border: solid 1px rgba(35, 35, 35, 0.15);
    border-top: none;      
  `}
`

Panes.displayName = "Tabs.Panes";

export { Panes };