import * as React from 'react';
interface IHarmonyElementProps {
    className?: string;
    color: string;
    onClick?: () => void;
}
declare class HarmonyElementBase extends React.Component<IHarmonyElementProps, {}> {
    render(): JSX.Element;
}
declare const HarmonyElement: import("styled-components").StyledComponent<typeof HarmonyElementBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { HarmonyElement };
