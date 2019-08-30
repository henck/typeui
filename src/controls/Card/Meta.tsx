import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IMetaProps {
  className?: string;
  children?: React.ReactNode;
}

class MetaBase extends React.Component<IMetaProps, {}> {
  render() {
    let p = this.props;
    return (
      <span className={p.className}>
        {p.children}
      </span>
    );
  }
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

class Meta extends React.Component<IMetaProps, {}> {
  render() {
    return (
      <MetaStyled {...this.props}></MetaStyled>
    );
  }
}

export { Meta };
