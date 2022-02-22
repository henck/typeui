import * as React from 'react';
interface IAlertDialogProps {
    children?: React.ReactNode;
    /** Is the Dialog currently open? */
    open?: boolean;
    /** Title to show in alert dialog. If not specified, "Alert" */
    title?: string;
    /** Function to call on close. */
    onClose: () => void;
}
declare class AlertDialog extends React.Component<IAlertDialogProps, {}> {
    render(): JSX.Element;
}
export { AlertDialog };
