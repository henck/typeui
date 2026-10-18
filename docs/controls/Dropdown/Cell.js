import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
const CellBase = (props) => _jsx("div", { className: props.className, children: props.item !== null && props.children(props.item) });
const Cell = styled(CellBase) `
  box-sizing: border-box;
  padding: 16px 12px;
  height: 56px;

  flex: ${p => p.weight ? p.weight : 1};

  /* Text alignment */
  ${p => p.align === 'right' && css `text-align: right;`}

  /* Text is truncated with an ellipsis. */
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;

  /* Space between cells. */
  &:not(:last-child) {
    margin-right: ${p => p.gap ?? 16}px;
  }
`;
export { Cell };
