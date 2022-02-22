import * as React from 'react';
interface ISwatch {
    color: string;
    locked: boolean;
}
interface ISwatchProps {
    className?: string;
    color: string;
    locked: boolean;
    onClick: () => void;
    onToggle: () => void;
}
declare class SwatchBase extends React.Component<ISwatchProps, {}> {
    constructor(props: ISwatchProps);
    render(): JSX.Element;
}
declare const Swatch: import("styled-components").StyledComponent<typeof SwatchBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { Swatch, ISwatch };
