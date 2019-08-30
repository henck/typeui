import * as React from 'react';
import styled from '../../styles/Theme';

export interface IHeaderContentProps {
  className?: string;
  children?: React.ReactNode;
}

class HeaderContentBase extends React.Component<IHeaderContentProps> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    )
  }
}

const HeaderContentStyled = styled(HeaderContentBase)`
  display: block;
  line-height: 1em;
`

export class HeaderContent extends React.Component<IHeaderContentProps> {
  public static displayName = "HeaderContent";

  render() {
    let p = this.props;
    return (
      <HeaderContentStyled {...p}/>
    )
  }  
}

