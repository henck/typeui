import * as React from 'react';
interface IProps {
    className?: string;
    deg: number;
    animation: boolean;
}
declare class ArrowBase extends React.Component<IProps> {
    render(): JSX.Element;
}
declare const Arrow: import("styled-components").StyledComponent<typeof ArrowBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { Arrow };
