import * as React from 'react';
interface IProps {
    className?: string;
    /** Hand angle in degrees (0..359 */
    degrees: number;
    /** If set, hand is animated. */
    animation: boolean;
}
declare class HandBase extends React.Component<IProps> {
    render(): JSX.Element;
}
declare const Hand: import("styled-components").StyledComponent<typeof HandBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { Hand };
