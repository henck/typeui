import * as React from 'react';
import { ISwatch } from './Swatch';
interface ISwatchBoxProps {
    className?: string;
    swatches: ISwatch[];
    onClick: (idx: number) => void;
    onToggle: (idx: number) => void;
}
declare class SwatchBoxBase extends React.Component<ISwatchBoxProps, {}> {
    render(): JSX.Element;
}
declare const SwatchBox: import("styled-components").StyledComponent<typeof SwatchBoxBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { SwatchBox };
