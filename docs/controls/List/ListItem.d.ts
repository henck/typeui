import * as React from 'react';
import { VerticalAlignment } from '../Types';
interface IListItemProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * (Not public) Icon and content alignment. Defaults to `top`
     * @ignore
     */
    align?: VerticalAlignment;
    /**
     * (Not public) Shows division lines between list items.
     * @ignore
     */
    divided?: boolean;
    /**
     * (Not public) Make items appear horizontally.
     * @ignore
     */
    horizontal?: boolean;
    /**
     * (Not public) Display selection rectangle on hover.
     * @ignore
     */
    selection?: boolean;
    /**
     * (Not public) Active selection is highlighted.
     * @ignore
     */
    active?: boolean;
    /**
     * (Not public) Increase negative space around item. Optionally `very`.
     * @ignore
     */
    relaxed?: 'very' | boolean;
    /**
     * (Not public)Animate list items on hover
     * @ignore
     */
    animated?: boolean;
    /**
     * onClick events are passed through to the list item's HTML element.
     */
    onClick?: () => void;
}
declare class ListItem extends React.Component<IListItemProps, {}> {
    render(): JSX.Element;
}
export { ListItem };
