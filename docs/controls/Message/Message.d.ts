import * as React from 'react';
import { VerticalDirection, HorizontalAlignment } from '../Types';
type TMessageType = 'info' | 'warning' | 'success' | 'error';
interface IMessageProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Setting `icon` will apply layout to the message to a allow a left-align icon.
     * @default false
     */
    icon?: boolean;
    /**
     * A hidden message isn't shown.
     * @default false
     */
    hidden?: boolean;
    /**
     * A compact message only takes up as much space as its content requires.
     * @default false
     */
    compact?: boolean;
    /**
     * Message type: `info`, `warning`, `success` or `error`.
     */
    type?: TMessageType;
    /**
     * Message color. Color is used for border; background will be lighter.
     */
    color?: string;
    /**
     * A raised message has a dropshadow.
     * @default false
     */
    raised?: boolean;
    /**
     * Attached to `top`, `bottom` or nothing (both).
     */
    attached?: boolean | VerticalDirection;
    /**
     * Align content to `left`, `center` or `right`. By default `left`.
     */
    align?: HorizontalAlignment;
}
/**
 * Displays an informational message block.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-message--properties
 */
declare const Message: {
    (props: IMessageProps): React.JSX.Element;
    Header: (props: import("./MessageHeader").IMessageHeaderProps) => React.JSX.Element;
    Content: (props: import("./MessageContent").IMessageContentProps) => React.JSX.Element;
};
export { Message, type TMessageType };
