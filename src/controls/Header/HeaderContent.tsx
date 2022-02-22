import * as React from 'react';
import styled from '../../styles/Theme';

export interface IHeaderContentProps {
  /** ignore */
  className?: string;
  children?: React.ReactNode;
}

class HeaderContentBase extends React.Component<IHeaderContentProps> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

const HeaderContentStyled = styled(HeaderContentBase)`
  display: block;
  line-height: 1em;
`

export class HeaderContent extends React.Component<IHeaderContentProps> {
  render = () => <HeaderContentStyled {...this.props}/>
}

