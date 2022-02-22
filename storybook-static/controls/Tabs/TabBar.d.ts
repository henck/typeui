import * as React from 'react';
interface ITabBarProps {
    className?: string;
    children?: React.ReactNode;
    active: number;
    underlined: boolean;
    onTabClicked: (idx: number) => void;
}
declare class TabBarBase extends React.Component<ITabBarProps, {}> {
    private tabRef;
    private underlinerRef;
    private barElement;
    private sliderElement;
    private dragging;
    private mouseX;
    private startX;
    private setTabRef;
    private setUnderlinerRef;
    getTabs(): JSX.Element[];
    handleMouseDown: (e: React.MouseEvent) => void;
    handleMouseMove: (event: MouseEvent) => void;
    handleMouseUp: (event: MouseEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ITabBarProps): void;
    private moveUnderliner;
    render(): JSX.Element;
}
declare const TabBar: import("styled-components").StyledComponent<typeof TabBarBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { TabBar };
