import * as React from 'react';
interface IColorBoxProps {
    className?: string;
    hue: number;
    saturation: number;
    brightness: number;
    onMouseDown: (data: {
        mouseX: number;
        offsetX: number;
        width: number;
        mouseY: number;
        offsetY: number;
        height: number;
    }) => void;
}
declare class ColorBoxBase extends React.Component<IColorBoxProps, {}> {
    private canvasRef;
    constructor(props: IColorBoxProps);
    drawColorBlock(): void;
    private handleMouseDown;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
declare const ColorBox: import("styled-components").StyledComponent<typeof ColorBoxBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { ColorBox };
