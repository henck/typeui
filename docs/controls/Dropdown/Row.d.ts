import * as React from 'react';
interface IRowProps {
    className?: string;
    children?: React.ReactNode;
    upwards?: boolean;
    onClick?: any;
}
declare class RowBase extends React.Component<IRowProps, {}> {
    render(): JSX.Element;
}
declare const Row: import("styled-components").StyledComponent<typeof RowBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Row };
