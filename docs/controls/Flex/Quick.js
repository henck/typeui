import { jsx as _jsx } from "react/jsx-runtime";
import styled from '../../styles/Theme';
import { css } from 'styled-components';
const QuickBase = (props) => _jsx("div", { className: props.className, children: props.children });
const QuickStyled = styled(QuickBase) `
  display: flex;
  ${p => p.gap && css `
    gap: ${p.gap};
  `}
  align-items: ${p => p.align || 'center'};
  & > * {
    margin-right: 4px;
  }
`;
const Quick = (props) => _jsx(QuickStyled, { ...props });
export { Quick };
