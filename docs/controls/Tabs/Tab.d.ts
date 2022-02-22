import * as React from 'react';
interface ITabProps {
    className?: string;
    children?: React.ReactNode;
    active?: boolean;
    underlined?: boolean;
    setRef?: any;
    onClick?: any;
}
declare class TabBase extends React.Component<ITabProps, {}> {
    render(): JSX.Element;
}
declare const Tab: import("styled-components").StyledComponent<typeof TabBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Tab };
