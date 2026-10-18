import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
const RowBase = (props) => _jsx("div", { className: props.className, children: React.Children.map(props.children, (child) => child ? React.cloneElement(child, { stackable: props.stackable, gutter: props.gutter }) : null) });
const RowStyled = styled(RowBase) `
  display: flex;
  flex-direction: row;
  padding: ${p => p.compact ? 0 : (p.gutter * p.theme.gutter)}em 0;
  &:first-of-type { padding-top: 0; }
  &:last-of-type { padding-bottom: 0; }    
  ${p => p.stackable && css `
    @media (max-width: ${p => p.theme.smallScreen}px) {
      flex-direction: column;
    }  
  `}
  ${p => p.divided && css `
    &:not(:last-of-type) {
      border-bottom: solid 1px ${p => p.theme.normalColor};
    }
  `}
`;
const Row = (props) => _jsx(RowStyled, { ...props });
export { Row };
