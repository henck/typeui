/// <reference types="react" />
interface IXhrDialogProps {
    /**
     * Is the Dialog currently open?
     * @default false
     */
    open?: boolean;
    /**
     * Axios error object.
     */
    error: any;
    /**
     * Function to call when user selects the 'OK' option.
     */
    onClose: () => void;
    /**
     * Function to call when user selects the 'Retry' option. If not provided, retry option will not be available.
     */
    onRetry?: () => void;
}
declare const XhrDialog: (props: IXhrDialogProps) => JSX.Element;
export { XhrDialog, IXhrDialogProps };
