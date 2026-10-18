import * as React from 'react';
import { Size, Direction, Float } from '../Types';
interface ILabelProps {
    /** @ignore */
    className?: string;
    /** @ignore */
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
    positive?: boolean;
    /**
     * If set, use `positive` color for Label.
     */
    negative?: boolean;
    /**
     * If set, use `negative` color for Label.
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
declare const LabelStyled: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("styled-components/dist/types").Merged<ILabelProps, {
    emSize?: number;
    finalColor?: string;
}>, "className" | "content" | "color" | "children" | "onClick" | "size" | "attached" | "basic" | "pointing" | "tag" | "emSize" | "positive" | "negative" | "floating" | "finalColor"> & Partial<Pick<import("styled-components/dist/types").Merged<ILabelProps, {
    emSize?: number;
    finalColor?: string;
}>, "className" | "content" | "color" | "children" | "onClick" | "size" | "attached" | "basic" | "pointing" | "tag" | "emSize" | "positive" | "negative" | "floating" | "finalColor">>> & string & Omit<(props: ILabelProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
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
    static Group: (props: import("./LabelGroup").ILabelGroupProps) => React.JSX.Element;
    /**
     * A label can contain a Label.Detail inside it.
     */
    static Detail: (props: import("./LabelDetail").ILabelDetailProps) => React.JSX.Element;
    render: () => React.JSX.Element;
}
export { Label, LabelStyled };
