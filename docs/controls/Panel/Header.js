import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
class HeaderBase extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx("span", { className: this.props.className, children: this.props.children });
    }
}
const HeaderStyled = styled(HeaderBase) `
  position: relative;
  display: block;
  padding: 10px 14px 8px 14px;
  font-size: 16px;
  background: #f9f9f9;
  &:first-child {
    border-top-left-radius: ${p => p.theme.radius}px;
    border-top-right-radius: ${p => p.theme.radius}px;    
  }
  &:not(:last-child) {
    border-bottom: solid 1px ${p => p.theme.normalColor};
  }
`;
class Header extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx(HeaderStyled, { ...this.props });
    }
}
export { Header };
