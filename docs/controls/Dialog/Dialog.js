import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
// Other controls
import { DialogBackground } from './DialogBackground';
import { DialogWindow } from './DialogWindow';
import { DialogHeader } from './DialogHeader';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { AlertDialog } from './AlertDialog';
import { ConfirmDialog } from './ConfirmDialog';
import { XhrDialog } from './XhrDialog';
/**
 * A Dialog is an overlay window that is triggered when the Dialog’s open attribute
 * is set to true. The calling code is responsible for setting open to false when the
 * Dialog should close. The Dialog also calls onClose when the user clicks outside the
 * Dialog.
 *
 * @example
 * <Button onClick={this.handleClick}>Open dialog</Button>
 * <Dialog open={this.state.open} onClose={this.handleClose}>
 *   <Dialog.Header>Welcome</Dialog.Header>
 *   <Dialog.Content>Good day!</Dialog.Content>
 *   <Dialog.Footer>
 *     <Button onClick={this.handleOK}>OK</Button>
 *   </Dialog.Footer>
 * </Dialog>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-dialog--properties
 */
class Dialog extends React.Component {
    constructor() {
        super(...arguments);
        this.backgroundRef = React.createRef();
        this.windowRef = React.createRef();
        // Handle document-wide mousedown event by sending a dialog close event.
        // When clicking outside of it, a Dialog can close only if its canClose
        // prop is not set to false.
        this.handleClickOutside = (event) => {
            let elem = event.target;
            if (this.windowRef.current && !this.windowRef.current.contains(elem) && this.props.onClose && this.props.canClose !== false) {
                this.props.onClose();
            }
        };
    }
    // Listen for document-wide mousedown event when component mounts.
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    // Clean up document-wide mousedown event when component unmounts.
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    // For use of CSSTransition, see:
    // http://reactcommunity.org/react-transition-group/css-transition
    // and 
    // https://veerasundar.com/blog/2018/12/how-to-animate-page-transition-in-react-using-styled-components/
    render() {
        let p = this.props;
        // CSS Transition mounts dialog when it is open. When it's closed, 
        // a Dialog does not appear in the DOM at all.
        return (_jsxs(_Fragment, { children: [_jsx(CSSTransition, { nodeRef: this.backgroundRef, in: p.open, timeout: 300, unmountOnExit: true, classNames: "fade", children: _jsx(DialogBackground, { nodeRef: this.backgroundRef }) }), _jsx(CSSTransition, { nodeRef: this.windowRef, in: p.open, timeout: 300, unmountOnExit: true, classNames: "fade", children: _jsx(DialogWindow, { width: p.width, windowRef: this.windowRef, children: p.children }) })] }));
    }
}
/**
 * Dialog.Header contains dialog header content.
 */
Dialog.Header = DialogHeader;
/**
 * Dialog.Content contains main dialog body content.
 */
Dialog.Content = DialogContent;
/**
 * Dialog.Footer contains dialog footer content.
 */
Dialog.Footer = DialogFooter;
/**
 * The Dialog component offers a pre-built Dialog.Alert type, with an "OK" button.
 * The caller provides a title, and any JSX inside the component is used as dialog content.
 */
Dialog.Alert = AlertDialog;
/**
 * The Dialog component offers a pre-built Dialog.Confirm type, with a "Yes" and a "No"
 * button. The caller provides a title, and any JSX inside the component is used as dialog
 * content.
 */
Dialog.Confirm = ConfirmDialog;
/**
 * The Dialog component offers a pre-built Dialog.Xhr type, with an "OK" and a "Retry"
 * button. This dialog can be used when an XHR request fails. It takes an error attribute
 * with an Axios response object, and reports it to the user.
 */
Dialog.Xhr = XhrDialog;
export { Dialog };
