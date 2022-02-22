import * as React from 'react';
interface IProps {
    className?: string;
    radius: number;
    raised?: boolean;
}
declare class InnerCircleBase extends React.Component<IProps> {
    render(): JSX.Element;
}
/**
 * Inner circle hides segment centers, and provides a place to show the percentage number.
 */
declare const InnerCircle: import("styled-components").StyledComponent<typeof InnerCircleBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { InnerCircle };
