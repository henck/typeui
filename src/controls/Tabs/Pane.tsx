import * as React from 'react';
import styled from '../../styles/Theme';

interface IPaneProps {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  label: React.ReactNode;
  nohiddenrender?: boolean;
}

class PaneBase extends React.Component<IPaneProps, {}> {

  private shouldRender = () => {
    return !this.props.nohiddenrender || this.props.active;
  }

  render() {
    let p = this.props;
    // By default, all children are rendered (but hidden when
    // not active). With nohiddenrender enabled, only the active
    // tab is rendered.
    return (
      <div className={p.className}>
        {this.shouldRender() ? p.children : null}
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