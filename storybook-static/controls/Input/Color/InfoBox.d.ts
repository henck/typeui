import * as React from 'react';
interface IInfoBoxProps {
    className?: string;
    hue: number;
    saturation: number;
    lightness: number;
    onClick: (color: string) => void;
    onChange: (color: string) => void;
}
declare class InfoBoxBase extends React.Component<IInfoBoxProps, {}> {
    private inputElement;
    constructor(props: IInfoBoxProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private handleClick;
    private parseInteger;
    private handleChangeHue;
    private handleChangeSaturation;
    private handleChangeLightness;
    private handleChangeRed;
    private handleChangeGreen;
    private handleChangeBlue;
    private handleChangeHex;
    private updateHex;
    render(): JSX.Element;
}
declare const InfoBox: import("styled-components").StyledComponent<typeof InfoBoxBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { InfoBox };
