import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
// Other controls
import { PanelBody } from './PanelBody';
class PanelContainer extends React.Component {
    constructor(props) {
        super(props);
        this.above = false; // Is body above parent?
        this.right = false; // Is body right-aligned to parent?
        this.offset = 20; // Offset of body arrow, in pixels.
        if (this.props.anchor) {
            const parent = this.props.anchor.parentElement;
            const rect = parent.getBoundingClientRect();
            this.above = rect.top >= window.innerHeight / 2,
                this.right = rect.left < window.innerWidth / 2;
            this.offset = Math.round(rect.width / 2);
        }
    }
    // After mounting, focus on the first <input> element in the panel,
    // if there is one.
    componentDidMount() {
        if (this.props.anchor) {
            const firstInput = this.props.anchor.parentElement.querySelector('input');
            if (firstInput != null)
                firstInput.focus();
        }
    }
    render() {
        let p = this.props;
        return (_jsx(PanelBody, { nodeRef: p.nodeRef, noanimation: this.props.noanimation, className: p.className, above: this.above, right: this.right, offset: this.offset, padded: p.padded, width: p.width, children: p.children }));
    }
}
export { PanelContainer };
