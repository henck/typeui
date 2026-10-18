import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
const LabelGroupBase = (props) => _jsx("div", { className: props.className, children: React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
            basic: child.props.basic ?? props.basic,
            color: child.props.color ?? props.color,
            pointing: child.props.pointing ?? props.pointing,
            size: child.props.size ?? props.size,
            tag: child.props.tag ?? props.tag
        });
    }) });
const LabelGroupStyled = styled(LabelGroupBase) `
  display: inline-block;
`;
const LabelGroup = (props) => _jsx(LabelGroupStyled, { ...props });
export { LabelGroup };
