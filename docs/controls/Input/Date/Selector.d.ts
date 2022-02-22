import * as React from 'react';
interface ISelectorProps {
    className?: string;
    nofuture?: boolean;
    value: any;
    upward: boolean;
    right: boolean;
    onSelect: any;
}
interface ISelectorState {
    date: Date;
    selectedDate: Date;
}
declare class SelectorBase extends React.Component<ISelectorProps, ISelectorState> {
    constructor(props: ISelectorProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleMove;
    private handlePrevYear;
    private handleNextYear;
    private handlePrevMonth;
    private handleNextMonth;
    private handleCancel;
    private handleDayClick;
    private handleKeyDown;
    render(): JSX.Element;
}
declare const Selector: import("styled-components").StyledComponent<typeof SelectorBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { Selector };
