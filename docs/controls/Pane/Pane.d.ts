import * as React from 'react';
import { IconPane } from './IconPane';
interface IPaneProps {
    /** ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Is the Pane currently open?
     * @default false
     */
    open: boolean;
    /**
     * A padded Pane adds padding to its content.
     * @default false
     */
    padded?: boolean;
    /**
     * Override default Pane width of 400 pixels.
     * @default 400
     */
    width?: number;
    /**
     * This callback is called when the Pane requests to close.
     */
    onClose: () => void;
}
/**
 * A Pane slides in from the right side of the viewport when its open property is set
 * to true. An onClose event is triggered when the user clicks outside of the pane or
 * when the user clicks the close (cross) icon.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-pane--properties
 */
declare class Pane extends React.Component<IPaneProps> {
    static Icon: typeof IconPane;
    render: () => JSX.Element;
}
export { Pane };
