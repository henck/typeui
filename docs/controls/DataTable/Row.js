import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { Ripple } from '../Ripple';
const RowBase = (props) => {
    const row = _jsx("div", { className: props.className, style: { top: props.top + 'px' }, onClick: props.onClick, children: props.children });
    // If row is clickable, wrap in a Ripple:
    if (props.onClick) {
        return _jsx(Ripple, { children: row });
    }
    else {
        return row;
    }
};
const RowStyled = styled(RowBase) `
  position: absolute;
  display: flex;
  width: 100%;
  background-color: ${p => p.theme.background};
  &:not(:last-child) {
    border-bottom: solid 1px ${p => p.theme.normalColor};
  }
  ${p => p.onClick && css `
    cursor: pointer;
    transition: background-color ${p => p.theme.transition.duration}s ease;
    &:hover {
      background-color: #f9f9f9;
    }
  `}
`;
const Row = (props) => _jsx(RowStyled, { ...props });
export { Row };
