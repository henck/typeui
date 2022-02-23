import * as React from 'react';
import { HorizontalAlignment, Float, VerticalDirection } from '../Types';
interface ISegmentProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Segment will have an extra-strong dropshadow if true.
     * @default false
     */
    raised?: boolean;
    /**
     * Segment will have a page lying below it if true.
     * @default false
     */
    stacked?: boolean;
    /**
     * (With stacked): Segment will have two pages lying below it if true.
     * @default false
     */
    tall?: boolean;
    /**
     * Segment will have a disorganized pile of two pages lying below it if true.
     * @default false
     */
    piled?: boolean;
    /**
     * Align content to `left`, `center` or `right`. By default `left`.
     */
    align?: HorizontalAlignment;
    /**
     * Segment can float to the `left` or `right`.
     */
    float?: Float;
    /**
     * Decrease segment's emphasis.
     * @default false
     */
    secondary?: boolean;
    /**
     * Seriously decrease segment's emphasis.
     * @default false
     */
    tertiary?: boolean;
    /**
     * Custom color
     */
    color?: string;
    /**
     * Increase segment padding (optionally `very`).
     * @default false
     */
    padded?: 'very' | boolean;
    /**
     * Decrease segment padding.
     * @default false
     */
    tight?: boolean;
    /**
     * Only take up as much space as necessary.
     * @default false
     */
    compact?: boolean;
    /**
     * A disabled segment is light in color.
     * @default false
     */
    disabled?: boolean;
    /**
     * Attached to `top`, `bottom` or nothing (both).
     */
    attached?: boolean | VerticalDirection;
}
/**
 * A Segment places a border around some content.
 *
 * @example
 * <Segment piled>Some content</Segment>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-segment--properties
 */
declare class Segment extends React.PureComponent<ISegmentProps> {
    render: () => JSX.Element;
}
export { Segment };
