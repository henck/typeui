import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
class SubheaderBase extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx("div", { className: this.props.className, children: this.props.children });
    }
}
const SubheaderStyled = styled(SubheaderBase) `
  font-weight: 500;
  font-size: 60%;
`;
export class Subheader extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx(SubheaderStyled, { ...this.props });
    }
}
