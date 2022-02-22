import * as React from 'react';
import { Size, Direction } from './../Types';
interface ILabelGroupProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    /** `basic` Labels add a border and do not have a background. */
    basic?: boolean;
    /** Labels' background color, e.g. `skyblue`. */
    color?: string;
    /** Labels point to other content to the `left`, `top`, `right` or `bottom`. Default direction is `left` */
    pointing?: Direction;
    /** Size of Labels, one of `mini`, `tiny`, `small`, `medium`, `large`, `big`, `huge` and `massive`. */
    size?: Size;
    /** If set, Labels appear as tags. */
    tag?: boolean;
}
declare class LabelGroup extends React.Component<ILabelGroupProps, {}> {
    render(): JSX.Element;
}
export { LabelGroup };
