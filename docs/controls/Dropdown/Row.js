import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
const RowBase = (props) => _jsx("div", { className: props.className, onClick: props.onClick, children: props.children });
const Row = styled(RowBase) `
  /* Entire row is clickable: */
  cursor: pointer;

  /* Cells are flex-aligned: */
  display: flex;

  /* Row has a top/bottom border depending on opening direction. */
  ${p => p.upwards && css `
      border-bottom: solid 1px ${p.theme.normalColor};
  `}
  ${p => !p.upwards && css `
    border-top: solid 1px ${p.theme.normalColor};
  `}

  /* Background color on hover: */
  transition: background-color ${p => p.theme.transition.duration}s ease;
  &:hover {
    background: ${p => p.theme.normalColor};
  }
`;
export { Row };
