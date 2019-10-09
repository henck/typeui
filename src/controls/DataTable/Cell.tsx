import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { Float } from '../Types';

interface ICellProps {
  className?: string;
  children?: React.ReactNode;
  item: any;
  /** Column weight. Defaults to 1. */
  weight?: number;
  /** Text alignment. Defaults to 'left'. */
  align?: Float;
  /** Show vertical grid lines? */
  grid?: boolean;
}

class CellBase extends React.Component<ICellProps, {}> {
  public render() {
    let p = this.props;
    // Item function is only called when item is not null.
    return (
      <div className={p.className}>
        {p.item !== null && (p.children as any)(p.item)}
      </div>
    )
  }
}

const Cell = styled(CellBase)`
  box-sizing: border-box;

  /* On small screens, only the first column is shown. */
  &:not(:first-child) {
    @media (max-width: ${p => p.theme.smallScreen}px) {
      display: none;
    }
  }      
  
  /* All cells are equal width. Todo? */
  flex: ${p => p.weight ? p.weight : 1};

  /* Text alignment */
  ${p => p.align === 'right' && css`text-align: right;`}

  padding: 16px 12px;
  height: 56px;

  /* Vertical gridlines */
  ${p => p.grid && css`
  &:not(:first-child) {
    border-left: solid 1px ${p => p.theme.normalColor};
  }`}
  
  /* Text is truncated with an ellipsis. */
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;

  /* Hide vertical overflow. */
  overflow-y: hidden;

  margin-right: 30px;
  &:not(:last-child) {
    margin-right: 26px;
  }
`;

export { Cell };