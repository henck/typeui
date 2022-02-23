import * as React from 'react';
import { DialogHeader } from './DialogHeader';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { AlertDialog } from './AlertDialog';
import { ConfirmDialog } from './ConfirmDialog';
import { XhrDialog } from './XhrDialog';
interface IDialogProps {
    children?: React.ReactNode;
    /**
     * Is the Dialog currently open?
     * @default: false
     */
    open?: boolean;
    /** This callback is called when the user closes the Dialog window. */
    onClose?: () => void;
    /**
     * Override standard dialog width of 600 pixels.
     * @default 600
     */
    width?: number;
    /**
     * If set to false, then the Dialog cannot be closed by clicking
     * outside of it. This is helpful when a Dialog is executing an
     * asynchronous task and must remain open while doing so.
     * @default true
     */
    canClose?: boolean;
}
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
declare class Dialog extends React.Component<IDialogProps, {}> {
    private windowElement;
    /**
     * Dialog.Header contains dialog header content.
     */
    static Header: typeof DialogHeader;
    /**
     * Dialog.Content contains main dialog body content.
     */
    static Content: typeof DialogContent;
    /**
     * Dialog.Footer contains dialog footer content.
     */
    static Footer: typeof DialogFooter;
    /**
     * The Dialog component offers a pre-built Dialog.Alert type, with an "OK" button.
     * The caller provides a title, and any JSX inside the component is used as dialog content.
     */
    static Alert: typeof AlertDialog;
    /**
     * The Dialog component offers a pre-built Dialog.Confirm type, with a "Yes" and a "No"
     * button. The caller provides a title, and any JSX inside the component is used as dialog
     * content.
     */
    static Confirm: typeof ConfirmDialog;
    /**
     * The Dialog component offers a pre-built Dialog.Xhr type, with an "OK" and a "Retry"
     * button. This dialog can be used when an XHR request fails. It takes an error attribute
     * with an Axios response object, and reports it to the user.
     */
    static Xhr: typeof XhrDialog;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: MouseEvent) => void;
    render(): JSX.Element;
}
export { Dialog };
