import * as React from 'react';
interface IProps {
    className?: string;
    children?: React.ReactNode;
    onClick: () => void;
}
declare class SelectionBase extends React.Component<IProps, {}> {
    private handleClick;
    render(): JSX.Element;
}
declare const Selection: import("styled-components").StyledComponent<typeof SelectionBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Selection };
