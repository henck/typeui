import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Other controls
import { Toast } from './Toast';
import { ToastService } from './ToastService';
class ToastContainerBase extends React.Component {
    constructor(props) {
        super(props);
        // Each toast needs a ref to its DOM node for its CSSTransition:
        this.nodeRefs = {};
        this.getNodeRef = (key) => { var _a; return (_a = this.nodeRefs)[key] ?? (_a[key] = React.createRef()); };
        this.handleTimeout = (key) => {
            // Remove messsage by key:    
            this.setState((prevState) => {
                let messages = prevState.messages;
                delete messages[key];
                delete this.nodeRefs[key];
                return {
                    messages: messages
                };
            });
        };
        ToastService.subscribe(this);
        this.state = {
            messages: {}
        };
    }
    // Add a new toast. This is called by ToastService.
    toast(message, duration) {
        this.setState((prevState) => {
            let messages = prevState.messages;
            // Remove excess messages:
            while (Object.keys(messages).length >= this.props.maxToasts) {
                const oldest = Object.keys(messages)[0];
                delete messages[oldest];
                delete this.nodeRefs[oldest];
            }
            // Create new message:
            let key = new Date().getTime().toString();
            messages[key] = {
                message: message,
                duration: duration
            };
            // Set new state:
            return {
                messages: messages
            };
        });
    }
    render() {
        let p = this.props;
        return (_jsx("div", { className: p.className, children: _jsx(TransitionGroup, { children: Object.keys(this.state.messages).map((key) => _jsx(CSSTransition, { nodeRef: this.getNodeRef(key), timeout: 500, classNames: "item", children: _jsx(Toast, { nodeRef: this.getNodeRef(key), message: this.state.messages[key].message, duration: this.state.messages[key].duration, onTimeout: () => this.handleTimeout(key) }) }, key)) }) }));
    }
}
const ToastContainerStyled = styled(ToastContainerBase) `
  position: absolute;
  z-index: 9999;
  /* 
   * Toasts are placed in the bottom-left corner, unless placement
   * is overridden. 
   */
  ${p => p.horizontalAlign == 'right' ? css `right: ${p.horizontalOffset ? p.horizontalOffset : 20}px` : css `left: ${p.horizontalOffset ? p.horizontalOffset : 20}px`}
  ${p => p.verticalAlign == 'top' ? css `top: ${p.verticalOffset ? p.verticalOffset : 20}px` : css `bottom: ${p.verticalOffset ? p.verticalOffset : 20}px`}
`;
class ToastContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.render = () => _jsx(ToastContainerStyled, { ...this.props });
    }
}
export { ToastContainer };
