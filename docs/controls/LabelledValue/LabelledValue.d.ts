import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Label to show above value
     */
    label: string;
    /**
     * Optional flex width
     */
    width?: number;
    /**
     * If set, then the LabelledValue has no background color.
     * @default false
     */
    nobackground?: boolean;
    /**
     * Optional hint text. Can be JSX.
     */
    hint?: React.ReactNode;
    /**
     * If onClick is specified, then the label has a link appearance.
     */
    onClick?: () => void;
}
/**
 * Displays a value with a label above it. A LabelledValue is just that: a label and
 * a value. It is used for view-only data. There is a very slight color change when the
 * mouse hovers over the value.
 *
 * @example
 * <LabelledValue label="My label">{value}</LabelledValue>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-labelledvalue--properties
 */
declare class LabelledValue extends React.Component<IProps> {
    render: () => JSX.Element;
}
export { LabelledValue };
