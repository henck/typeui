import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { HorizontalAlignment } from '../Types';

interface ICardHeaderProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Optional text alignment to `left`, `center` or `right` (default is `left`). 
   */
  align?: HorizontalAlignment;
}

const HeaderBase = (props: ICardHeaderProps) =>
  <span className={props.className}>{props.children}</span>

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

const Header = (props: ICardHeaderProps) => <HeaderStyled {...props}></HeaderStyled>

export { Header, ICardHeaderProps }
