import * as React from 'react';
import { VerticalAlignment } from '../Types';
interface IListContentProps {
    /** @ignore */
    className?: string;
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
declare class ListContent extends React.Component<IListContentProps> {
    render: () => JSX.Element;
}
export { ListContent };
