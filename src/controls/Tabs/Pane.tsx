import * as React from 'react';
import styled from '../../styles/Theme';

interface IPaneProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /**
   * Tab label. Can be JSX.
   */
  label: React.ReactNode;
  /** @ignore */
  active?: boolean;
  /** @ignore */
  nohiddenrender?: boolean;
}

const PaneBase = (props: IPaneProps) => {

  const shouldRender = () => {
    return !props.nohiddenrender || props.active;
  }

  // By default, all children are rendered (but hidden when
  // not active). With nohiddenrender enabled, only the active
  // tab is rendered.
  return (
    <div className={props.className}>
      {shouldRender() ? props.children : null}
    </div>
  )
}

const PaneStyled = styled(PaneBase)`
  position: relative;
  display: flex;
  flex-direction: column;
  display: ${p => !p.active ? 'none': ''};
  height: 100%;
`

const Pane = (props: IPaneProps) => <PaneStyled {...props}/>

export { Pane, IPaneProps }
