import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { Float } from '../Types';

interface ICellProps {
  className?: string;
  children?: React.ReactNode;
  item: any;
  /** Column weight. Defaults to 1. */
  weight?: number;
  /** Text alignment. Defaults to 'left'. */
  align?: Float;  
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
  padding: 16px 12px;
  height: 56px;

  /* All cells are equal width. Todo? */
  flex: ${p => p.weight ? p.weight : 1};

  /* Text alignment */
  ${p => p.align === 'right' && css`text-align: right;`}

  /* Text is truncated with an ellipsis. */
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;

  /* Space between cells. */
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export { Cell };