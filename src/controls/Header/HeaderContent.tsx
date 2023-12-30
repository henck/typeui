import * as React from 'react';
import styled from '../../styles/Theme';

export interface IHeaderContentProps {
  /** ignore */
  className?: string;
  /** ignore */
  children?: React.ReactNode;
}

const HeaderContentBase  = (props: IHeaderContentProps) => 
  <div className={props.className}>{props.children}</div>

const HeaderContentStyled = styled(HeaderContentBase)`
  display: block;
  line-height: 1em;
`

const HeaderContent = (props: IHeaderContentProps) =>
  <HeaderContentStyled {...props}/>

export { HeaderContent }
