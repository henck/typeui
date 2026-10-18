import * as React from 'react';
interface ICircularProgressProps {
    /** @ignore */
    className?: string;
    /**
     * Progress percentage value.
     * This must be a value between 0 and 100.
     */
    value: number;
    /**
     * Progress line color. Defaults to primary theme color.
     */
    color?: string;
    /**
     * Circle radius. Defaults to 50px.
     * @default 50
     */
    radius?: number;
    /**
     * Line thickness. Defaults to 8px.
     * @default 8
     */
    thickness?: number;
    /**
     * If set, line gets a background.
     * @default false
     */
    background?: boolean;
    /**
     * If set, line is rounded at ends.
     * @default false
     */
    rounded?: boolean;
    /**
     * If set, line and text get edge drop shadow.
     * @default false
     */
    raised?: boolean;
    /**
     * If set, progress line animates when it first appears.
     * @default false
     */
    animated?: boolean;
    /**
     * A padded CircularProgress has a margin around it.
     * @default false
     */
    padded?: boolean;
    /**
     * Font size factor compared to inherited font size. Defaults to 1.
     * Use 2 to increase font size 2x.
     */
    fontFactor?: number;
    /**
     * Fired when control is clicked. Control is only interactive
     * if this event handler has a value.
     */
    onClick?: () => void;
}
/**
 * A CircularProgress shows a circular progress meter that is optionally animated.
 *
 * @example
 * <CircularProgress animated color="hotpink" padded raised value={15}/>
 * <CircularProgress animated background padded raised value={90}/>
 * <CircularProgress animated background color="crimson" padded raised rounded value={48}/>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-circularprogress--properties
 */
declare const CircularProgress: (props: ICircularProgressProps) => React.JSX.Element;
export { CircularProgress, type ICircularProgressProps };
