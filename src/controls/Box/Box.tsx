import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IBoxProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Box fill color. Default is `pink`. 
   * @default pink
   */
  color?: string;
}

const BoxBase = (props: IBoxProps) =>
  <div className={props.className}>{props.children}</div>

const BoxStyled = styled(BoxBase)`
  display: block;
  padding: 30px;
  text-align: center;
  border-radius: 2px;
  ${p => !p.color && css`background: pink;`}
  ${p => p.color && css`background: ${p.color};`}
`;

const Box = (props: IBoxProps) => <BoxStyled {...props}/>

export { Box }
