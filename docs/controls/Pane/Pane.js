import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
// Other controls
import { Icon } from '../Icon/Icon';
import { IconPane } from './IconPane';
class PaneBase extends React.Component {
    constructor(props) {
        super(props);
        // Handle document-wide mousedown event by sending a pane close event.
        this.handleClickOutside = (e) => {
            let elem = e.target;
            if (this.props.open && this.paneElement && !this.paneElement.contains(elem) && this.props.onClose) {
                this.props.onClose();
            }
        };
        this.handleKeyDown = (e) => {
            if (e.key == 'Escape')
                this.props.onClose();
        };
    }
    // Listen for document-wide mousedown/keydown events when component mounts.
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    // Clean up document-wide mousedown/keydown events event when component unmounts.
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        let p = this.props;
        return (_jsxs("div", { className: p.className, ref: (el) => this.paneElement = el, children: [_jsx(Iconholder, { children: _jsx(Icon, { size: "large", name: "times", onClick: p.onClose }) }), p.children] }));
    }
}
const Iconholder = styled.div `
  position: absolute;
  right: 10px;
  top: 10px;
`;
const PaneStyled = styled(PaneBase) `
  position: fixed;
  z-index: 2000;
  right: -${p => p.width ? (p.width + 50) : 450}px;
  width: ${p => p.width ? p.width : 400}px;
  top: 0;
  height: 100%;

  /* Undo parent text alignment */
  text-align: left;

  /* Add padding if set in props */
  padding: ${p => p.padded ? '16px' : '0'};

  background: #fff;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.5);
  transition: right ${p => p.theme.transition.duration * 4}s ease;
  ${p => p.open && css `
    right: 0;
  `}
`;
/**
 * A Pane slides in from the right side of the viewport when its open property is set
 * to true. An onClose event is triggered when the user clicks outside of the pane or
 * when the user clicks the close (cross) icon.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-pane--properties
 */
const Pane = (props) => _jsx(PaneStyled, { ...props });
Pane.Icon = IconPane;
export { Pane };
