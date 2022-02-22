import * as React from 'react';
interface IProps {
    className?: string;
    /**
     * Segment color. Defaults to theme primary color.
     */
    color?: string;
    /**
     * Size of segment in degrees.
     */
    angleBody: number;
    /**
     * OFfset of segment in degrees.
     */
    angleOffset: number;
}
declare class SegmentBase extends React.Component<IProps, {}> {
    render(): JSX.Element;
}
declare const Segment: import("styled-components").StyledComponent<typeof SegmentBase, import("../../styles/Theme").IThemeInterface, {
    skew: number;
}, "skew">;
export { Segment };
