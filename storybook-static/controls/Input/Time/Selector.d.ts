import * as React from 'react';
import { TMode } from './Clock';
interface ISelectorProps {
    className?: string;
    value: any;
    upward: boolean;
    right: boolean;
    hasSeconds: boolean;
    is24h: boolean;
    clock: boolean;
    onSelect: any;
}
interface ISelectorState {
    mode: TMode;
    hour: number;
    minute: number;
    second: number;
    am: boolean;
}
declare class SelectorBase extends React.Component<ISelectorProps, ISelectorState> {
    private wrapperElement;
    constructor(props: ISelectorProps);
    componentDidMount: () => void;
    private handleCancel;
    private handleSelect;
    private getMinHour;
    private getMaxHour;
    private isValid;
    private forceRange;
    private handleHour;
    private handleMinute;
    private handleSecond;
    private handleAM;
    private handlePM;
    private handleClock;
    getClockValue: () => number;
    private handleKeyDown;
    render(): JSX.Element;
}
declare const Selector: import("styled-components").StyledComponent<typeof SelectorBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { Selector };
