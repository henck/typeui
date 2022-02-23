import * as React from 'react';
import { Size, Direction, Float } from '../Types';
import { LabelGroup } from './LabelGroup';
import { LabelDetail } from './LabelDetail';
interface ILabelProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * A `basic` Label adds a border and does not have a background.
     * @default false
     */
    basic?: boolean;
    /**
     * Label background color, e.g. `skyblue`.
     */
    color?: string;
    /**
     * Label content may be passed as a property.
     */
    content?: React.ReactNode;
    /**
     * A floating Label floats over the top-right corner of its parent.
     * @default false
     */
    floating?: boolean;
    /**
     * Point to other content to the `left`, `top`, `right` or `bottom`. Default direction is `left`
     */
    pointing?: boolean | Direction;
    /**
     * Label size, one of `mini`, `tiny`, `small`, `medium`, `large`, `big`, `huge` and `massive`.
     * @default medium
     */
    size?: Size;
    /**
     * If set, Label appears as a tag.
     * @default false
     */
    tag?: boolean;
    /**
     * Determine if Label is attached to anything, `left` or `right`.
     */
    attached?: Float;
    /**
     * onClick events are passed through to the Label's HTML element.
     */
    onClick?: () => void;
}
declare class LabelBase extends React.Component<ILabelProps> {
    render: () => JSX.Element;
}
declare const LabelStyled: import("styled-components").StyledComponent<typeof LabelBase, import("../../styles/Theme").IThemeInterface, {
    emSize: number;
}, "emSize">;
/**
 * Stylable label.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-label--properties
 */
declare class Label extends React.Component<ILabelProps> {
    static defaultProps: {
        isLabel: boolean;
    };
    /**
     * A Label.Group can pass props to the labels it contains, but
     * children can still override them. Goups can pass along basic,
     * color, pointing, size and tag.
     */
    static Group: typeof LabelGroup;
    /**
     * A label can contain a Label.Detail inside it.
     */
    static Detail: typeof LabelDetail;
    render: () => JSX.Element;
}
export { Label, LabelStyled };
