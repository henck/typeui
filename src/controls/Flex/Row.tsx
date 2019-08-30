import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IRowProps {
  className?: string;
  children?: React.ReactNode;
  stackable?: boolean;
  divided?: boolean;
  compact?: boolean;
  gutter?: number;
}

class RowBase extends React.Component<IRowProps, {}> {
  constructor(props: IRowProps) {
    super(props);
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        {React.Children.map(p.children, (child:any) => 
          child ? React.cloneElement(child, { stackable: p.stackable, gutter: p.gutter }) : null
        )}
      </div>
    );
  }
}

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

class Row extends React.Component<IRowProps, {}> {
  public static displayName = "Flex.Row";
  
  render() {
    let p = this.props;
    return (
      <RowStyled {...p}/>
    )
  }  
}

export { Row };