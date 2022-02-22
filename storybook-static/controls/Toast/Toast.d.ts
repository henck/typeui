import * as React from 'react';
interface IToastProps {
    className?: string;
    message: React.ReactNode;
    /** Toast duration in ms. Default is 8000ms */
    duration?: number;
    /** Timeout callback, called when the Toast self-closes. */
    onTimeout: () => void;
}
declare class Toast extends React.Component<IToastProps, {}> {
    render(): JSX.Element;
}
export { Toast };
