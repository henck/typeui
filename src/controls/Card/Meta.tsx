import * as React from 'react';
import styled from '../../styles/Theme';

interface IMetaProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
}

class MetaBase extends React.Component<IMetaProps> {
  render = () => <span className={this.props.className}>{this.props.children}</span>
}

const MetaStyled = styled(MetaBase)`
  position: relative;
  display: block;
  padding: 0 14px 0 14px;
  font-size: 90%;
  color: #888;
  &:last-child {
    padding-bottom: 12px;
  }  
`

class Meta extends React.Component<IMetaProps> {
  render = () => <MetaStyled {...this.props}></MetaStyled>
}

export { Meta };
