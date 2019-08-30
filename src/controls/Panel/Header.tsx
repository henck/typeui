import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

class HeaderBase extends React.Component<IHeaderProps, {}> {
  render() {
    let p = this.props;
    return (
      <span className={p.className}>
        {p.children}
      </span>
    );
  }
}

const HeaderStyled = styled(HeaderBase)`
  position: relative;
  display: block;
  padding: 10px 14px 8px 14px;
  font-size: 16px;
  background: #f9f9f9;
  &:first-child {
    border-top-left-radius: ${p => p.theme.radius}px;
    border-top-right-radius: ${p => p.theme.radius}px;    
  }
  &:not(:last-child) {
    border-bottom: solid 1px ${p => p.theme.normalColor};
  }
`

class Header extends React.Component<IHeaderProps, {}> {
  render() {
    return (
      <HeaderStyled {...this.props}></HeaderStyled>
    );
  }
}

export { Header };
