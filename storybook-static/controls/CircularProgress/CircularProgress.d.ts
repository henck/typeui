import * as React from 'react';
interface IProps {
    className?: string;
    /** Progress percentage value */
    value: number;
    /** Progress line color. Defaults to primary theme color. */
    color?: string;
    /** Circle radius. Defaults to 50px. */
    radius?: number;
    /** Line thickness. Defaults to 8px. */
    thickness?: number;
    /** If set, line gets a grey background. */
    background?: boolean;
    /** If set, line is rounded at ends. */
    rounded?: boolean;
    /** If set, line gets edge drop shadow. */
    raised?: boolean;
    /** If set, progress line animates when it first appears. */
    animated?: boolean;
    /** A padded CircularProgress has a margin around it. */
    padded?: boolean;
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
declare class CircularProgress extends React.Component<IProps> {
    render(): JSX.Element;
}
export { CircularProgress };
