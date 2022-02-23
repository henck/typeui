import * as React from 'react';
interface IConfirmDialogProps {
    children?: React.ReactNode;
    /**
     * Is the Dialog currently open?
     * @default false
     */
    open?: boolean;
    /**
     * Title to show in confirmation dialog. If not specified, "Confirmation"
     * @default Confirmation
     */
    title?: string;
    /**
     * Function to call on close (with a negative reply).
     */
    onClose: () => void;
    /**
     * Function to call on close (with a positive reply).
     */
    onConfirm: () => void;
}
declare class ConfirmDialog extends React.Component<IConfirmDialogProps, {}> {
    render(): JSX.Element;
}
export { ConfirmDialog };
