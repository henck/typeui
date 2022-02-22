import * as React from 'react';
import { HorizontalAlignment, Float, VerticalDirection } from '../Types';
interface ISegmentProps {
    className?: string;
    children?: React.ReactNode;
    /** Segment will have an extra-strong dropshadow if true. */
    raised?: boolean;
    /** Segment will have a page lying below it if true. */
    stacked?: boolean;
    /** (With stacked): Segment will have two pages lying below it if true. */
    tall?: boolean;
    /** Segment will have a disorganized pile of two pages lying below it if true. */
    piled?: boolean;
    /** Align content to `left`, `center` or `right`. By default `left`. */
    align?: HorizontalAlignment;
    /** Segment can float to the `left` or `right`. */
    float?: Float;
    /** Decrease segment's emphasis. */
    secondary?: boolean;
    /** Seriously decrease segment's emphasis. */
    tertiary?: boolean;
    /** Custom color */
    color?: string;
    /** Increase segment padding (optionally `very`). */
    padded?: 'very' | boolean;
    /** Decrease segment padding. */
    tight?: boolean;
    /** Only take up as much space as necessary. */
    compact?: boolean;
    /** A disabled segment is light in color. */
    disabled?: boolean;
    /** Attached to `top`, `bottom` or nothing (both). */
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
declare class Segment extends React.PureComponent<ISegmentProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export { Segment };
