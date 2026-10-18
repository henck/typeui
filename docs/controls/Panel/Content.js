import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
class ContentBase extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx("div", { className: this.props.className, children: this.props.children });
    }
}
const ContentStyled = styled(ContentBase) `
  position: relative;
  padding: 14px;
  &:first-child {
    border-top-left-radius: ${p => p.theme.radius}px;
    border-top-right-radius: ${p => p.theme.radius}px;    
  }
  &:not(:last-child) {
    border-bottom: solid 1px ${p => p.theme.normalColor};
  }
`;
class Content extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx(ContentStyled, { ...this.props });
    }
}
export { Content };
