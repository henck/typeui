import * as React from 'react';
import styled from '../../styles/Theme';

interface IUnderlinerProps {
  className?: string;
  setRef?: any;
}

class UnderlinerBase extends React.Component<IUnderlinerProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className} ref={p.setRef}></div>
    )
  }
}

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

Underliner.displayName = "Tabs.Underliner";

export { Underliner };