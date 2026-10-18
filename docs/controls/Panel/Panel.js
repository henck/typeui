import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ThemeConsumer } from 'styled-components';
// Other controls
import { PanelContainer } from './PanelContainer';
import { Content } from './Content';
import { Header } from './Header';
import { Footer } from './Footer';
import { IconPanel } from './IconPanel';
/**
 * Note that a panel determines its position from the position of its direct parent.
 * The parent therefore must have position: relative.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-panel--properties
 */
class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        // Handle document-wide mousedown event by sending a panel close event.
        this.handleClickOutside = (e) => {
            let elem = e.target;
            if (this.panelElement && !this.panelElement.contains(elem) && this.props.open && this.props.onClose) {
                // A short timeout prevents the panel reopening immediately when its
                // trigger element is clicked.
                setTimeout(() => this.props.onClose(), 100);
            }
        };
        this.handleKeyDown = (e) => {
            if (e.key == 'Escape')
                this.props.onClose();
        };
        this.state = {
            anchor: null
        };
    }
    // Listen for document-wide mousedown/keydown events when component mounts.
    componentDidMount() {
        this.setState({
            anchor: this.panelElement
        });
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    // Clean up document-wide mousedown/keydown events when component unmounts.
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        let p = this.props;
        return (_jsx("div", { ref: (el) => this.panelElement = el, children: _jsx(ThemeConsumer, { children: (theme) => _jsx(CSSTransition, { nodeRef: this.containerRef, in: p.open, timeout: theme.transition.duration * 1000 * 3, appear: true, unmountOnExit: true, classNames: "fade", children: _jsx(PanelContainer, { nodeRef: this.containerRef, anchor: this.state.anchor, noanimation: p.noanimation, padded: p.padded, width: p.width, children: p.children }) }) }) }));
    }
}
Panel.Header = Header;
Panel.Content = Content;
Panel.Footer = Footer;
/**
 * The Panel.Icon component is a shortcut to building a Panel that opens when an
 * Icon is clicked. Note that the Panel.Icon must still be placed inside a container
 * that is relatively positioned, and that the only way to close the panel is to click
 * outside it.
 *
 * An icon can be passed as an icon type, or as a collection of icon properties.
 */
Panel.Icon = IconPanel;
export { Panel };
