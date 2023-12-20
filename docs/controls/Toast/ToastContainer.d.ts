import * as React from 'react';
import { HorizontalDirection, VerticalDirection } from '../Types';
interface IToastContainerProps {
    /** @ignore */
    className?: string;
    /**
     * Maximum number of toasts on-screen at the same time.
     */
    maxToasts: number;
    /** Vertical alignment: top or bottom (defaults to bottom). */
    verticalAlign?: VerticalDirection;
    /** Horizontal alignment: left or right (defaults to left). */
    horizontalAlign?: HorizontalDirection;
    /** Offset from corner (defaults to 20 pixels). */
    horizontalOffset?: number;
    /** Offset from corner (defaults to 20 pixels). */
    verticalOffset?: number;
}
declare class ToastContainer extends React.Component<IToastContainerProps> {
    render: () => JSX.Element;
}
export { ToastContainer };
