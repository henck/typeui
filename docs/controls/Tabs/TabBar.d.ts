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
    getTabs(): React.JSX.Element[];
    handleMouseDown: (e: React.MouseEvent) => void;
    handleMouseMove: (event: MouseEvent) => void;
    handleMouseUp: (event: MouseEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ITabBarProps): void;
    private moveUnderliner;
    render(): React.JSX.Element;
}
declare const TabBar: import("styled-components/dist/types").IStyledComponentBase<"web", ITabBarProps & React.RefAttributes<TabBarBase>> & string & Omit<typeof TabBarBase, keyof React.Component<any, {}, any>>;
export { TabBar };
