import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
class ImageGroupBase extends React.Component {
    render() {
        let p = this.props;
        // Build a list of properties to pass along to child images.
        let props = {};
        if (p.size)
            props.size = p.size;
        if (p.bordered)
            props.bordered = p.bordered;
        if (p.rounded)
            props.rounded = p.rounded;
        if (p.circular)
            props.circular = p.circular;
        return (_jsx("div", { className: p.className, children: React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, props);
            }) }));
    }
}
/* Styling for Image Group. */
const ImageGroupStyled = styled(ImageGroupBase) `
  display: flex;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;
class ImageGroup extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx(ImageGroupStyled, { ...this.props });
    }
}
export { ImageGroup };
