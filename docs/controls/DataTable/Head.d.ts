import * as React from 'react';
interface IHeadProps {
    className?: string;
    children?: any;
    loading: boolean;
}
declare class HeadBase extends React.Component<IHeadProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
declare const Head: import("styled-components").StyledComponent<typeof HeadBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Head };
