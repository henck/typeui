import * as React from 'react';
interface IProgressProps {
    /** @ignore */
    className?: string;
    /**
     * Progress value (in range 0..100)
     */
    value: number;
    /**
     * If set, Progress is not rounded.
     * default false
     */
    rectangular?: boolean;
    /**
     * If set, a background is added.
     * @default false
     */
    background?: boolean;
    /**
     * If set, a border is added.
     * @default false
     */
    bordered?: boolean;
    /**
     * A raised Progress has a drop shadow.
     * @default false
     */
    raised?: boolean;
    /**
     * If set, a percentage number is shown on the Progress bar.
     * @default false
     */
    numbered?: boolean;
    /**
     * Set progress bar thickness in pixels. Defaults to 12.
     * @default 12
     */
    thickness?: number;
    /**
     * If set, sets the color of the Progress bar. By default,
     * the color is the theme primary color.
     */
    color?: string;
}
/**
 * The Progress component shows a progress bar, filled to a percentage equal to
 * value. The bar always stretches to fill all horizontal space available to it.
 *
 * @example
 * <Progress
 *   background
 *   value={50}/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-progress--properties
 */
declare class Progress extends React.Component<IProgressProps> {
    render: () => JSX.Element;
}
export { Progress };
