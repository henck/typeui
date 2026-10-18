import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
const CellBase = (props) => _jsx("div", { className: props.className, onClick: props.onClick, onDoubleClick: props.onDoubleClick, children: props.item !== null && props.children(props.item) });
const Cell = styled(CellBase) `
  position: relative;
  
  box-sizing: border-box;
  font-size: 14px;

  /* On small screens, only the first column is shown. */
  ${p => !p.force && css `
    &:not(:first-child) {
      @media (max-width: ${p => p.theme.smallScreen}px) {
        display: none;
      }
    }      
  `}
  
  /* All cells are equal width. Todo? */
  flex: ${p => p.weight ? p.weight : 1};

  /* Text alignment */
  ${p => p.align === 'right' && css `text-align: right;`}

  padding: 16px 6px;
  height: 56px;

  /* Vertical gridlines */
  ${p => p.grid && css `
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
