import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IRowProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** @ignore */
  stackable?: boolean; // (Not public) Passed by parent Flex
  /** @ignore */
  divided?: boolean;   // (Not public) Passed by parent Flex
  /** @ignore */
  compact?: boolean;   // (Not public) Passed by parent Flex
  /** @ignore */
  gutter?: number;     // (Not public) Passed by parent Flex
}

const RowBase = (props: IRowProps) =>
  <div className={props.className}>
    {React.Children.map(props.children, (child:any) => 
      child ? React.cloneElement(child, { stackable: props.stackable, gutter: props.gutter }) : null
    )}
  </div>

const RowStyled = styled(RowBase)`
  display: flex;
  flex-direction: row;
  padding: ${p => p.compact ? 0 : (p.gutter * p.theme.gutter)}em 0;
  &:first-of-type { padding-top: 0; }
  &:last-of-type { padding-bottom: 0; }    
  ${p => p.stackable && css`
    @media (max-width: ${p => p.theme.smallScreen}px) {
      flex-direction: column;
    }  
  `}
  ${p => p.divided && css`
    &:not(:last-of-type) {
      border-bottom: solid 1px ${p => p.theme.normalColor};
    }
  `}
`;

const Row = (props: IRowProps) => <RowStyled {...props}/>

export { Row, IRowProps }
