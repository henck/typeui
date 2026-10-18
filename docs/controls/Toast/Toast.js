import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
// Other controls
import { Icon } from '../Icon/Icon';
import { IconStyled } from '../Icon/Icon';
;
/**
 * Toasts can be clicked to self-close. Otherwise they self-close
 * after a duration in milliseconds.
 */
class ToastBase extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            this.props.onTimeout();
        };
        // Set a timeout on the toast, saving the
        // timer handle for later cleanup.
        this.timerHandle = window.setTimeout(() => {
            this.props.onTimeout();
        }, this.props.duration ? this.props.duration : 8000);
    }
    // Clear any running timer:
    componentWillUnmount() {
        window.clearTimeout(this.timerHandle);
    }
    render() {
        let p = this.props;
        return (_jsxs("div", { className: p.className, ref: p.nodeRef, onClick: this.handleClick, children: [_jsx(Icon, { name: "bullhorn", color: "#fff" }), _jsx("div", { children: p.message })] }));
    }
}
const ToastStyled = styled(ToastBase) `
  display: flex;
  align-items: flex-start;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: ${p => p.theme.radius}px;
  margin-top: 8px;
  cursor: pointer;

  & > ${IconStyled} {
    margin-right: 10px;
  }

  /* CSSTransition classes */
  &.item-enter {
    opacity: 0;
    transform: translateX(-150%);
  }
  &.item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${p => p.theme.transition.duration * 3}s ease-in-out, 
                transform ${p => p.theme.transition.duration * 3}s ease-in-out;
  }
  &.item-exit {
    opacity: 1;
    transform: translateX(0);
  }
  &.item-exit-active {
    opacity: 0;
    transform: translateX(-150%);
    transition: opacity ${p => p.theme.transition.duration * 3}s ease-in-out, 
                transform ${p => p.theme.transition.duration * 3}s ease-in-out;
  }  
`;
class Toast extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx(ToastStyled, { ...this.props });
    }
}
export { Toast };
