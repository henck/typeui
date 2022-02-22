var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Handle document-wide mousedown event by sending a dialog close event.
        // When clicking outside of it, a Dialog can close only if its canClose
        // prop is not set to false.
        _this.handleClickOutside = function (event) {
            var elem = event.target;
            if (_this.windowElement && !_this.windowElement.contains(elem) && _this.props.onClose && _this.props.canClose !== false) {
                _this.props.onClose();
            }
        };
        return _this;
    }
    // Listen for document-wide mousedown event when component mounts.
    Dialog.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.handleClickOutside);
    };
    // Clean up document-wide mousedown event when component unmounts.
    Dialog.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleClickOutside);
    };
    // For use of CSSTransition, see:
    // http://reactcommunity.org/react-transition-group/css-transition
    // and 
    // https://veerasundar.com/blog/2018/12/how-to-animate-page-transition-in-react-using-styled-components/
    Dialog.prototype.render = function () {
        var _this = this;
        var p = this.props;
        // CSS Transition mounts dialog when it is open. When it's closed, 
        // a Dialog does not appear in the DOM at all.
        return (React.createElement(React.Fragment, null,
            React.createElement(CSSTransition, { in: p.open, timeout: 300, unmountOnExit: true, classNames: "fade" },
                React.createElement(DialogBackground, null)),
            React.createElement(CSSTransition, { in: p.open, timeout: 300, unmountOnExit: true, classNames: "fade" },
                React.createElement(DialogWindow, { width: p.width, windowRef: function (el) { return _this.windowElement = el; } }, p.children))));
    };
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
    return Dialog;
}(React.Component));
Dialog.Header.displayName = "Dialog.Header";
Dialog.Content.displayName = "Dialog.Content";
Dialog.Footer.displayName = "Dialog.Footer";
Dialog.Alert.displayName = "Dialog.Alert";
Dialog.Confirm.displayName = "Dialog.Confirm";
Dialog.Xhr.displayName = "Dialog.Xhr";
export { Dialog };
