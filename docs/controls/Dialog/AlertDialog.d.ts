import * as React from 'react';
interface IAlertDialogProps {
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Is the Dialog currently open?
     * @default false
     */
    open?: boolean;
    /**
     * Optional title to show in alert dialog. If not specified, this will be
     * "Alert".
     * @default Alert
     */
    title?: string;
    /**
     * Function to call when Dialog closes.
     */
    onClose: () => void;
}
declare const AlertDialog: (props: IAlertDialogProps) => JSX.Element;
export { AlertDialog, IAlertDialogProps };
