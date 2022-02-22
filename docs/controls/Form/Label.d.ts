import * as React from 'react';
interface ILabelProps {
    className?: string;
    children?: React.ReactNode;
    /** An inline label floats before its control, not above it. */
    inline?: boolean;
    /** A required label gets an asterisk.  */
    required?: boolean;
}
declare class LabelBase extends React.Component<ILabelProps, {}> {
    render(): JSX.Element;
}
declare const Label: import("styled-components").StyledComponent<typeof LabelBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Label };
