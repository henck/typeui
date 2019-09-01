import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { HorizontalAlignment } from '../Types';

interface IHeaderProps {
  className?: string;
  children?: React.ReactNode;
  /** Optional text alignment to `left`, `center` or `right` (default is `left`). */
  align?: HorizontalAlignment;
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
  padding: 14px 14px 0 14px;
  font-size: 20px;
  ${p => (!p.align || p.align == 'left') && css`text-align: left;`}
  ${p => p.align == 'center' && css`text-align: center;`}    
  ${p => p.align == 'right' && css`text-align: right;`}    
  &:last-child {
    padding-bottom: 12px;
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
