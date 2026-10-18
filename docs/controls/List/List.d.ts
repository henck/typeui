import * as React from 'react';
import { VerticalAlignment, ListStyleType } from '../Types';
interface IListProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Icon and content alignment: `top`, `center` or `bottom`. By default `top`
     */
    align?: VerticalAlignment;
    /**
     * Shows division lines between list items.
     * @default false
     */
    divided?: boolean;
    /**
     * Marks items with a bullet.
     * @default false
     */
    bulleted?: boolean;
    /**
     * Marks items with a number.
     * @default false
     */
    ordered?: boolean;
    /**
     * Optional bullet style (HTML values, e.g. `square`). This only has effect on `bulleted` lists.
     */
    type?: ListStyleType;
    /**
     * Make items appear horizontally.
     * @default false
     */
    horizontal?: boolean;
    /**
     * Display selection rectangle on hover.
     * @default false
     */
    selection?: boolean;
    /**
     * Increase negative space around items. Optionally `very`.
     * @default false
     */
    relaxed?: 'very' | boolean;
    /**
     * Animate list items on hover.
     * @default false
     */
    animated?: boolean;
}
/**
 * @link https://henck.github.io/typeui/?path=/story/controls-list--properties
 */
declare const List: {
    (props: IListProps): React.JSX.Element;
    Item: (props: import("./ListItem").IListItemProps) => React.JSX.Element;
    Icon: (props: import("..").IIconProps) => React.JSX.Element;
    Content: (props: import("./ListContent").IListContentProps) => React.JSX.Element;
    Header: (props: import("./ListHeader").IListHeaderProps) => React.JSX.Element;
    Description: (props: import("./ListDescription").IProps) => React.JSX.Element;
};
export { List };
