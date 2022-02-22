import * as React from 'react';
declare type TMode = 'hour' | 'minute' | 'second';
interface IProps {
    className?: string;
    /**
     * Clock value in degrees (0..359)
     */
    degrees: number;
    /**
     * Callback when a new value in degrees is selected.
     * Done is true if the mouse button was released.
     */
    onSelect: (degrees: number, done: boolean) => void;
    /**
     * Clock mode (hour, minute, second)
     */
    mode: TMode;
    /**
     * If set, 24H mode is on.
     */
    is24h?: boolean;
}
interface IState {
    arrow_animation: boolean;
}
declare class ClockBase extends React.Component<IProps, IState> {
    private faceElement;
    private mouseDown;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate: (newProps: IProps) => void;
    private eventToDeg;
    private handleMouseDown;
    private handleMouseUp;
    private handleMouseMove;
    render: () => JSX.Element;
}
declare const Clock: import("styled-components").StyledComponent<typeof ClockBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { Clock, TMode };
