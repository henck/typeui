import * as React from 'react';
interface IErrorDialogProps {
    /**
     * Is the Dialog currently open?
     * @default false
     */
    open?: boolean;
    /**
     * Axios response object.
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
declare class XhrDialog extends React.Component<IErrorDialogProps, {}> {
    getStatusHeader(): any;
    getStatusText(): "Your session is not authenticated." | "You do not have sufficient permissions to execute this operation." | "The request endpoint could not be found on the server." | "The database API tried to execute an HTTP method that was disallowed by the server. This may be indicative of a missing route implementation on the server." | "The server refuses the attempt to brew coffee with teapot." | "The request could not be validated." | "The server API encountered an error. This is indicative of a server implementation error." | "The request method is not supported by the server and cannot be handled. This may be indicative of a missing route implementation on the server." | "An error occurred on the server. Please try again later." | "There was a problem communicating with the server. Please try again later." | "There was a problem setting up the request to the server.";
    render(): JSX.Element;
}
export { XhrDialog };
