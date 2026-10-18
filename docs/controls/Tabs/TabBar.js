import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
import { Tab } from './Tab';
import { Underliner } from './Underliner';
class TabBarBase extends React.Component {
    constructor() {
        super(...arguments);
        // A Tab child uses callback refs to set the ref to the 
        // current tab. When using callback refs, the ref is the 
        // actual DOM element (not a Ref).
        this.setTabRef = (ref) => {
            this.tabRef = ref;
        };
        // The underliner child uses callback refs to set the ref to the 
        // current tab. When using callback refs, the ref is the 
        // actual DOM element (not a Ref).  
        this.setUnderlinerRef = (ref) => {
            this.underlinerRef = ref;
        };
        this.handleMouseDown = (e) => {
            this.dragging = true;
            // We store the current mouse position on the screen,
            // as well as the current scroll position of the slider.
            this.mouseX = e.screenX;
            this.startX = this.sliderElement.offsetLeft;
        };
        this.handleMouseMove = (event) => {
            if (!this.dragging)
                return;
            // Use the current mouse position to determine the
            // new scroll position of the slider.
            let dMouse = event.screenX - this.mouseX;
            let x = this.startX + dMouse; // x is always a negative offset.
            // Check scroll bounds:
            if (x > 0)
                x = 0;
            let width = this.sliderElement.offsetWidth - this.barElement.offsetWidth;
            if (x < -width)
                x = -width;
            // Apply new scroll position:
            this.sliderElement.style.left = `${x}px`;
        };
        this.handleMouseUp = (event) => {
            this.dragging = false;
        };
    }
    // 
    // For each Pane, create a Tab.
    // 
    getTabs() {
        // Go through panes:
        return React.Children.map(this.props.children, (child, i) => {
            // Callback refs are used to get ref to current tab.
            let ref = i === this.props.active ? this.setTabRef : null;
            if (child == null)
                return null;
            return (_jsx(Tab, { setRef: ref, active: i === this.props.active, underlined: this.props.underlined, onClick: this.props.onTabClicked.bind(this, i), children: child.props.label }));
        });
    }
    componentDidMount() {
        // Listen for document-wide mouseup/mousemove events when TabBar mounts.
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        // Use refs to tabs to move underliner to initial position.
        if (!this.props.underlined)
            return;
        this.moveUnderliner();
    }
    componentWillUnmount() {
        // Clean up document-wide mouseup/mousemove events when Dropdown unmounts.
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }
    componentDidUpdate(prevProps) {
        // Use refs to tabs to move underliner to new position.
        if (!prevProps.underlined)
            return;
        this.moveUnderliner();
    }
    // Use refs to move underliner under active tab.
    moveUnderliner() {
        if (!this.tabRef)
            return;
        let { offsetLeft, offsetWidth } = this.tabRef;
        if (this.underlinerRef) {
            this.underlinerRef.style.left = `${offsetLeft}px`;
            this.underlinerRef.style.width = `${offsetWidth}px`;
        }
    }
    render() {
        let p = this.props;
        // The underliner element only appears for underlined tabs.
        const underliner = p.underlined ? _jsx(Underliner, { setRef: this.setUnderlinerRef }) : null;
        return (_jsx("div", { className: p.className, ref: (el) => this.barElement = el, children: _jsxs("div", { ref: (el) => this.sliderElement = el, onMouseDown: this.handleMouseDown, children: [this.getTabs(), underliner] }) }));
    }
}
/* Style the tabs bar. Its bottom border is erased by
 * the active tab's bottom border. */
const TabBar = styled(TabBarBase) `
  position: relative;
  display: block;
  height: 40px;
  min-height: 40px;
  overflow-x: hidden;

  &>div {
    position: absolute;
    left: 0;
    top: 0;
    width: auto !important;
    min-width: 100%;
    height: 40px;
    box-sizing: border-box;
    display: block;
    border-bottom: solid 1px rgba(35, 35, 35, 0.15);
  }
`;
export { TabBar };
