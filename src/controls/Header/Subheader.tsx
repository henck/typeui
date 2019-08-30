import * as React from 'react';
import styled from '../../styles/Theme';

export interface ISubheaderProps {
  className?: string;
  children?: React.ReactNode;
}

class SubheaderBase extends React.Component<ISubheaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    )
  }
}

const SubheaderStyled = styled(SubheaderBase)`
  font-weight: 500;
  font-size: 60%;
`

export class Subheader extends React.Component<ISubheaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <SubheaderStyled {...p}/>
    )
  }  
}
