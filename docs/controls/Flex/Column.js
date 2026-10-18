import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import styled from '../../styles/Theme';
const ColumnBase = (props) => _jsx("div", { className: props.className, children: props.children });
const ColumnStyled = styled(ColumnBase) `
  ${p => p.width && css `flex: ${p.width};`}
  padding: 0 ${p => p.gutter * p.theme.gutter}em;
  &:first-child { padding-left: 0; }
  &:last-child { padding-right: 0; }  
  ${p => p.stackable && css `
    @media (max-width: ${p => p.theme.smallScreen}px) {
      padding: ${p.gutter * p.theme.gutter}em 0;
      &:first-child { padding-top: 0; }
      &:last-child { padding-bottom: 0; }        
    }
  `}
`;
const Column = (props) => _jsx(ColumnStyled, { ...props });
export { Column };
