import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { Float } from '../Types';

interface ICellProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  item: any;
  /** Column weight. Defaults to 1. */
  weight?: number;
  /** Text alignment. Defaults to 'left'. */
  align?: Float;  
}

const CellBase = (props: ICellProps) =>
  // Item function is only called when item is not null.
  <div className={props.className}>
    {props.item !== null && (props.children as any)(props.item)}
  </div>

const Cell = styled(CellBase)`
  box-sizing: border-box;
  padding: 16px 12px;
  height: 56px;

  flex: ${p => p.weight ? p.weight : 1};

  /* Text alignment */
  ${p => p.align === 'right' && css`text-align: right;`}

  /* Text is truncated with an ellipsis. */
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;

  /* Space between cells. */
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export { Cell }
