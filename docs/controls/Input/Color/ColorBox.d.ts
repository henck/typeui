import * as React from 'react';
interface IProps {
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
declare const ColorBox: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { ColorBox };
