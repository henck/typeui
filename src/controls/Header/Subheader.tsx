import * as React from 'react';
import styled from '../../styles/Theme';

export interface ISubheaderProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class SubheaderBase extends React.Component<ISubheaderProps> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

const SubheaderStyled = styled(SubheaderBase)`
  font-weight: 500;
  font-size: 60%;
`

export class Subheader extends React.Component<ISubheaderProps> {
  render = () => <SubheaderStyled {...this.props}/>
}
