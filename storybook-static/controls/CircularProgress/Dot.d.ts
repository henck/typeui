import * as React from 'react';
interface IProps {
    className?: string;
    left: number;
    top: number;
    thickness: number;
    color?: string;
}
declare class DotBase extends React.Component<IProps> {
    render(): JSX.Element;
}
declare const Dot: import("styled-components").StyledComponent<typeof DotBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Dot };
