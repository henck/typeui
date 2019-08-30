import * as React from 'react';
import styled from '../../styles/Theme';

interface IPaneProps {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  label: React.ReactNode;
}

class PaneBase extends React.Component<IPaneProps, {}> {
  render() {
    let p = this.props;
    // Children are rendered only when pane is active.
    return (
      <div className={p.className}>
        {p.children}
      </div>
    )
  }
}

const PaneStyled = styled(PaneBase)`
  position: relative;
  display: flex;
  flex-direction: column;
  display: ${p => !p.active ? 'none': ''};
  height: 100%;
`

class Pane extends React.Component<IPaneProps, {}> {
  render() {
    let p = this.props;
    return (
      <PaneStyled {...p}/>
    )
  }  
}

export { Pane };