import * as React from 'react';
interface IToastContainerProps {
    /** @ignore */
    className?: string;
    /**
     * Maximum number of toasts on-screen at the same time.
     */
    maxToasts: number;
}
declare class ToastContainer extends React.Component<IToastContainerProps> {
    render: () => JSX.Element;
}
export { ToastContainer };
