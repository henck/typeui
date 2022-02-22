import * as React from 'react';
interface IHarmonyBoxProps {
    className?: string;
    type: 'complementary' | 'triadic' | 'tetradic' | 'analogous' | 'neutral' | 'shades' | 'tints';
    hue: number;
    saturation: number;
    lightness: number;
    onClick: (color: string) => void;
}
declare class HarmonyBoxBase extends React.Component<IHarmonyBoxProps, {}> {
    private hsl;
    private colors;
    private handleClick;
    private addDegrees;
    render(): JSX.Element;
}
declare const HarmonyBox: import("styled-components").StyledComponent<typeof HarmonyBoxBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { HarmonyBox };
