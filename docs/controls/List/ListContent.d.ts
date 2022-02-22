import * as React from 'react';
import { VerticalAlignment } from '../Types';
interface IListContentProps {
    className?: string;
    children?: React.ReactNode;
    /** onClick events are passed through to the list item's HTML element. */
    onClick?: () => void;
    /** Align content item vertically (defaults to `top`). */
    align?: VerticalAlignment;
}
declare class ListContent extends React.Component<IListContentProps, {}> {
    render(): JSX.Element;
}
export { ListContent };
