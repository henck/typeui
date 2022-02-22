import * as React from 'react';
import { VerticalAlignment } from '../Types';
interface IListItemProps {
    className?: string;
    children?: React.ReactNode;
    /** onClick events are passed through to the list item's HTML element. */
    onClick?: () => void;
    /** Icon and content alignment. Defaults to `top` */
    align?: VerticalAlignment;
    /** Shows division lines between list items. */
    divided?: boolean;
    /** Make items appear horizontally. */
    horizontal?: boolean;
    /** Display selection rectangle on hover. */
    selection?: boolean;
    /** Active selection is highlighted. */
    active?: boolean;
    /** Increase negative space around item. Optionally `very`. */
    relaxed?: 'very' | boolean;
    /** Animate list items on hover */
    animated?: boolean;
}
declare class ListItem extends React.Component<IListItemProps, {}> {
    render(): JSX.Element;
}
export { ListItem };
