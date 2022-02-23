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
     * If set, line gets a grey background.
     * @default false
     */
    background?: boolean;
    /**
     * If set, line is rounded at ends.
     * @default false
     */
    rounded?: boolean;
    /**
     * If set, line gets edge drop shadow.
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
declare class CircularProgress extends React.Component<ICircularProgressProps> {
    render: () => JSX.Element;
}
export { CircularProgress };
