import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    type: 'complementary' | 'triadic' | 'tetradic' | 'analogous' | 'neutral' | 'shades' | 'tints';
    hue: number;
    saturation: number;
    lightness: number;
    onClick: (color: string) => void;
}
declare const HarmonyBox: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { HarmonyBox };
