import * as React from 'react';
import { IconPane } from './IconPane';
interface IPaneProps {
    className?: string;
    children?: React.ReactNode;
    /** Is the Pane currently open? */
    open: boolean;
    /** This callback is called when the Pane requests to close. */
    onClose: () => void;
    /** A padded Pane adds padding to its content. */
    padded?: boolean;
    /** Override default Pane width of 400 pixels. */
    width?: number;
}
/**
 * A Pane slides in from the right side of the viewport when its open property is set
 * to true. An onClose event is triggered when the user clicks outside of the pane or
 * when the user clicks the close (cross) icon.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-pane--properties
 */
declare class Pane extends React.Component<IPaneProps, {}> {
    static displayName: string;
    static Icon: typeof IconPane;
    render(): JSX.Element;
}
export { Pane };
