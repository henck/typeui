import * as React from 'react';
interface IToastProps {
    /** @ignore */
    className?: string;
    message: React.ReactNode;
    /**
     * Toast duration in ms. Default is 8000ms
     * @default 8000
     */
    duration?: number;
    /**
     * Timeout callback, called when the Toast self-closes.
     */
    onTimeout: () => void;
}
declare class Toast extends React.Component<IToastProps> {
    render: () => JSX.Element;
}
export { Toast };
