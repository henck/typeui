import * as React from 'react';
import { VerticalAlignment } from '../Types';
interface IListContentProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Align content item vertically (defaults to `top`).
     */
    align?: VerticalAlignment;
    /**
     * onClick events are passed through to the list item's HTML element.
     */
    onClick?: () => void;
}
declare const ListContent: (props: IListContentProps) => React.JSX.Element;
export { ListContent, type IListContentProps };
