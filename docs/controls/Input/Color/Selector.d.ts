import * as React from 'react';
import { ISwatch } from './ISwatch';
interface ISelectorProps {
    className?: string;
    nodeRef?: React.Ref<HTMLDivElement>;
    value: string;
    upward: boolean;
    right: boolean;
    onSelect: any;
}
interface ISelectorState {
    hue: number;
    hsv_saturation: number;
    hsv_brightness: number;
    hsl_saturation: number;
    hsl_lightness: number;
    swatches: ISwatch[];
}
declare class SelectorBase extends React.Component<ISelectorProps, ISelectorState> {
    private mouseType;
    private mouseX;
    private offsetX;
    private mouseWidth;
    private mouseY;
    private offsetY;
    private mouseHeight;
    constructor(props: ISelectorProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private loadSwatches;
    private saveSwatches;
    private defaultColors;
    private getStateFromColor;
    private sv_to_sl;
    private sl_to_sv;
    handleMouseMove: (e: MouseEvent) => void;
    handleMouseUp: () => void;
    handleHueMouseDown: (data: {
        mouseY: number;
        offsetY: number;
        height: number;
    }) => void;
    handleColorMouseDown: (data: {
        mouseX: number;
        offsetX: number;
        width: number;
        mouseY: number;
        offsetY: number;
        height: number;
    }) => void;
    private handleClickSwatch;
    private handleClickHarmony;
    private handleToggleSwatch;
    private handleClickColor;
    private handleChangeColor;
    private handleSelect;
    private handleCancel;
    private setHue;
    private addSwatch;
    private setColor;
    private handleKeyDown;
    render(): React.JSX.Element;
}
declare const Selector: import("styled-components/dist/types").IStyledComponentBase<"web", ISelectorProps & React.RefAttributes<SelectorBase>> & string & Omit<typeof SelectorBase, keyof React.Component<any, {}, any>>;
export { Selector };
