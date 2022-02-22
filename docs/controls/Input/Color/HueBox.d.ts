import * as React from 'react';
interface IHueBoxProps {
    className?: string;
    hue: number;
    onMouseDown: (data: {
        mouseY: number;
        offsetY: number;
        height: number;
    }) => void;
}
declare class HueBoxBase extends React.Component<IHueBoxProps, {}> {
    private canvasRef;
    constructor(props: IHueBoxProps);
    drawBar(): void;
    private handleMouseDown;
    componentDidMount(): void;
    render(): JSX.Element;
}
declare const HueBox: import("styled-components").StyledComponent<typeof HueBoxBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { HueBox };
