import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface IGroupProps {
  /** @ignore */
  className?: string;  
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Divide field widths evenly. 
   * @default false 
   */
  equal?: boolean;
}

const GroupBase = (props: IGroupProps) =>
  <div className={props.className}>{props.children}</div>

const GroupStyled = styled(GroupBase)`
  display:        flex;
  flex-direction: row;
  flex-wrap:      wrap;
  align-items:    flex-start;

  /* Insert a small margin between fields, and fix for wrapping
  * using negative margins. */
  margin: 0 -8px;
  & > * { margin: 0 8px; }
  /* For equal spacing, have each field occupy 100%. */
  ${p => p.equal && css`
    & > * {
      width: 100%;
    }
  `}
`;

const Group = (props: IGroupProps) => <GroupStyled {...props}/>

export { Group, IGroupProps }
