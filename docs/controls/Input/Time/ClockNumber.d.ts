import * as React from 'react';
interface IProps {
    className?: string;
    /** Value to show */
    value: string;
    /** Location of number in degrees (0 = top) */
    degrees: number;
    /** Is the clock number currently selected? */
    active: boolean;
}
/**
 * A ClockNumber is a number on the face of the clock.
 */
declare class ClockNumberBase extends React.Component<IProps> {
    render: () => JSX.Element;
}
declare const ClockNumber: import("styled-components").StyledComponent<typeof ClockNumberBase, import("../../../styles/Theme").IThemeInterface, {
    left: number;
    top: number;
    yFix: number;
}, "left" | "top" | "yFix">;
export { ClockNumber };
