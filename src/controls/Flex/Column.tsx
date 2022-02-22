import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IColumnProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
  /** 
   * Column relative weight, for cell growth. If not specified, cell doesn't flex. 
   */
  width?: number;
  /** @ignore */
  stackable?: boolean; // (Not public) Passed by parent Flex
  /** @ignore */
  gutter?: number;     // (Not public) Passed by parent Flex
}

class ColumnBase extends React.Component<IColumnProps> {
  render = () => <div className={this.props.className}>{this.props.children}</div>
}

const ColumnStyled = styled(ColumnBase)`
  ${p => p.width && css`flex: ${p.width};`}
  padding: 0 ${p => p.gutter * p.theme.gutter}em;
  &:first-child { padding-left: 0; }
  &:last-child { padding-right: 0; }  
  ${p => p.stackable && css`
    @media (max-width: ${p => p.theme.smallScreen}px) {
      padding: ${p.gutter * p.theme.gutter}em 0;
      &:first-child { padding-top: 0; }
      &:last-child { padding-bottom: 0; }        
    }
  `}
`;

class Column extends React.Component<IColumnProps> {
  render = () => <ColumnStyled {...this.props}/>
}

export { Column };