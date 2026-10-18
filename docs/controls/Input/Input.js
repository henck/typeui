import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { CSSTransition } from 'react-transition-group';
// Other controls
import { StandardInput } from './StandardInput';
import { InputBox as DateInputBox } from './Date/InputBox';
import { Selector as DateSelector } from './Date/Selector';
import { InputBox as TimeInputBox } from './Time/InputBox';
import { Selector as TimeSelector } from './Time/Selector';
import { InputBox as ColorInputBox } from './Color/InputBox';
import { Selector as ColorSelector } from './Color/Selector';
import { Clear } from './Clear';
import { Icon } from '../Icon/';
import { IconStyled } from '../Icon/Icon';
const InputInnerBase = (props) => {
    const wrapperRef = React.useRef(null);
    const selectorRef = React.useRef(null);
    // Selector currently open?
    const [open, setOpen] = React.useState(false);
    // Selector opens upward?
    const [upward, setUpward] = React.useState(false);
    // Selector opens right?
    const [right, setRight] = React.useState(false);
    // Add (and remove) document-wide event listener for mousedown.
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const findScrollingParentRecursive = (node) => {
        const overflowY = window.getComputedStyle(node).overflowY;
        if (overflowY == 'scroll' || overflowY == 'auto')
            return node;
        if (node.parentElement)
            return findScrollingParentRecursive(node.parentElement);
        return null;
    };
    // Return my nearest parent that's scrolling (frames are not supported). If
    // no parent is found, null is returned.
    const findScrollingParent = () => {
        return findScrollingParentRecursive(wrapperRef.current.parentElement);
    };
    // Returns true if the input is in the lower half of its scrolling parent.
    // (if direction == parent), or in the lower half of the viewport if no 
    // scrolling parent is found.
    const isInLowerViewport = () => {
        const scrollingParent = findScrollingParent();
        if (scrollingParent == null || props.direction != 'parent') {
            return wrapperRef.current.getBoundingClientRect().top > window.innerHeight / 2;
        }
        else {
            const myY = wrapperRef.current.getBoundingClientRect().top;
            const containerY = scrollingParent.getBoundingClientRect().top;
            const containerHeight = scrollingParent.getBoundingClientRect().height;
            const offset = myY - containerY;
            return offset > containerHeight / 2;
        }
    };
    // Returns true if the input is to the right of the middle of the viewport.
    const isInRightViewport = () => wrapperRef.current.getBoundingClientRect().left > window.innerWidth * 0.45;
    const handleClick = () => {
        // Disabled input cannot be clicked.
        if (props.disabled)
            return;
        // Set opening direction.
        if (props.direction == 'down')
            setUpward(false);
        else if (props.direction == 'up')
            setUpward(true);
        else
            setUpward(isInLowerViewport());
        setRight(isInRightViewport());
        setOpen(true);
    };
    //
    // Toggle selector.
    //
    const handleToggle = () => {
        // A disabled input cannot be clicked.
        if (props.disabled)
            return;
        // Set opening direction.
        if (props.direction == 'down')
            setUpward(false);
        else if (props.direction == 'up')
            setUpward(true);
        else
            setUpward(isInLowerViewport());
        setRight(isInRightViewport());
        setOpen(!open);
    };
    const handleKeyDown = (e) => {
        e.stopPropagation();
        if (e.key == 'Enter' || e.key == ' ')
            handleToggle();
        if (e.key == 'Tab')
            setOpen(false);
    };
    //
    // If a value is selected, close the selector.
    //  
    const handleSelect = (value) => {
        // Close the selector.
        setOpen(false);
        // If a value was selected, notify listener (if any).
        if (value && props.onChange) {
            props.onChange(value);
        }
    };
    //
    // Handle document-wide mousedown event by closing the Selector.
    // (This only happens if there actually is a Selector).
    //
    const handleClickOutside = (e) => {
        let elem = e.target;
        if (wrapperRef.current && !wrapperRef.current.contains(elem)) {
            setOpen(false);
        }
    };
    const handleClear = () => {
        if (props.onChange) {
            props.onChange(null);
        }
    };
    // Speedup: only re-render input when value changes, or its error/disabled state.
    /*  shouldComponentUpdate(nextProps: IInputProps, nextState: IInputState) {
      const differentValue = this.props.value !== nextProps.value;
      const differentError = this.props.error !== nextProps.error;
      const differentDisabled = this.props.disabled !== nextProps.disabled;
      const differentOpen = this.state.open != nextState.open;
      return differentValue || differentError || differentDisabled || differentOpen;
    } */
    let { className, ...p } = props;
    let icon = null;
    // An icon can be passed either as an IconType...
    if (typeof p.icon === "string") {
        icon = (_jsx(Icon, { name: p.icon }));
    }
    // ... or as IIconProps.
    else if (p.icon != null) {
        icon = (_jsx(Icon, { ...p.icon }));
    }
    return (_jsxs("div", { className: className, onClick: handleClick, ref: wrapperRef, children: [p.type !== 'date' && p.type !== 'color' && p.type !== 'time' &&
                _jsx(StandardInput, { ...p }), p.type === 'date' &&
                _jsxs(_Fragment, { children: [_jsx(DateInputBox, { ...p, defaultFormat: "dd-MM-yyyy", onKeyDown: handleKeyDown }), _jsx(CSSTransition, { nodeRef: selectorRef, in: open, timeout: 300, unmountOnExit: true, classNames: "fade", children: _jsx(DateSelector, { nodeRef: selectorRef, value: p.value, upward: upward, right: right, onSelect: handleSelect, nofuture: p.nofuture }) })] }), p.type === 'time' &&
                _jsxs(_Fragment, { children: [_jsx(TimeInputBox, { ...p, defaultFormat: p.hasSeconds ? "HH:mm:ss" : "HH:mm", onKeyDown: handleKeyDown }), _jsx(CSSTransition, { nodeRef: selectorRef, in: open, timeout: 300, unmountOnExit: true, classNames: "fade", children: _jsx(TimeSelector, { nodeRef: selectorRef, value: p.value, upward: upward, right: right, onSelect: handleSelect, hasSeconds: p.hasSeconds, is24h: p.is24h, clock: p.clock }) })] }), p.type === 'color' &&
                _jsxs(_Fragment, { children: [_jsx(ColorInputBox, { ...p, onKeyDown: handleKeyDown }), _jsx(CSSTransition, { nodeRef: selectorRef, in: open, timeout: 300, unmountOnExit: true, classNames: "fade", children: _jsx(ColorSelector, { nodeRef: selectorRef, value: p.value, upward: upward, right: right, onSelect: handleSelect }) })] }), icon, p.clearable && p.value !== null && _jsx(Clear, { onClick: handleClear })] }));
};
const InputInner = styled(InputInnerBase) `
  position: relative;
  display: inline-block;
  ${p => !p.fluid && css `width: 250px;`}
  ${p => p.fluid && css `width: 100%;`}

  /* Icon */
  ${IconStyled} {
    position: absolute;
    z-index: 15;
    ${p => !p.iconPosition && css `left: 18px;`}
    ${p => p.iconPosition && p.iconPosition === 'left' && css `left: 18px;`}
    ${p => p.iconPosition && p.iconPosition === 'right' && css `right: 6px;`}
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity ${p => p.theme.transition.duration}s ease;
    opacity: 0.5;
  }
  input:focus ~ ${IconStyled} {
    opacity: 1;
  }    

  /* If something is attached to the input, remove its border radius. */
  &:not(:first-child) {
    input, & > div {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  &:not(:last-child) {
    input, & > div {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
const InputBase = (props) => {
    const isAttachedTo = (c, side) => {
        const attached = c.props.attached;
        return attached === side || (!attached && side === 'left');
    };
    // Return an array of children that are Labels and attached to this
    // Input control.
    const getAttachables = (side) => {
        return React.Children.toArray(props.children)
            .filter(c => React.isValidElement(c) // Is this a React node?
            && c.props.isLabel // Is this a Label?
            && isAttachedTo(c, side) // Is it attached to this side?
        )
            .map((c, idx) => {
            let attached = c.props.attached;
            if (!attached)
                attached = 'left'; // Attach to left side by default.
            return React.cloneElement(c, { key: idx, attached: attached });
        });
    };
    const getIconProps = () => {
        let properties = null;
        React.Children.forEach(props.children, (child) => {
            if (React.isValidElement(child) && child.props.isIcon) {
                properties = child.props;
            }
        });
        return properties;
    };
    let { className, ...otherProps } = props;
    // The InputInner class is a wrapper to allow for placement
    // of attached elements such as Labels, as well as passing
    // the "pristine" state down.
    return (_jsxs("div", { className: className, children: [getAttachables('left'), _jsx(InputInner, { icon: getIconProps(), ...otherProps }), getAttachables('right')] }));
};
const InputStyled = styled(InputBase) `
  position:    relative;
  display:     inline-flex;
  align-items: stretch;
  min-width:   40px;
  ${p => p.fluid && css `width: 100%;`}
`;
/**
 * Replacement for standard HTML input.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-input--properties
 */
const Input = (props) => _jsx(InputStyled, { ...props });
export { Input };
