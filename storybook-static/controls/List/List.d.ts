import * as React from 'react';
import { VerticalAlignment, ListStyleType } from '../Types';
import { ListItem } from './ListItem';
import { ListIcon } from './ListIcon';
import { ListContent } from './ListContent';
import { ListHeader } from './ListHeader';
import { ListDescription } from './ListDescription';
interface IListProps {
    className?: string;
    children?: React.ReactNode;
    /** Icon and content alignment: `top`, `center` or `bottom`. By default `top` */
    align?: VerticalAlignment;
    /** Shows division lines between list items. */
    divided?: boolean;
    /** Marks items with a bullet. */
    bulleted?: boolean;
    /** Marks items with a number. */
    ordered?: boolean;
    /** Optional bullet style (HTML values, e.g. `square`). This only has effect on `bulleted` lists.*/
    type?: ListStyleType;
    /** Make items appear horizontally. */
    horizontal?: boolean;
    /** Display selection rectangle on hover. */
    selection?: boolean;
    /** Increase negative space around items. Optionally `very`. */
    relaxed?: 'very' | boolean;
    /** Animate list items on hover. */
    animated?: boolean;
}
/**
 * @link https://henck.github.io/typeui/?path=/story/controls-list--properties
 */
declare class List extends React.Component<IListProps, {}> {
    static Item: typeof ListItem;
    static Icon: typeof ListIcon;
    static Content: typeof ListContent;
    static Header: typeof ListHeader;
    static Description: typeof ListDescription;
    render(): JSX.Element;
}
export { List };
