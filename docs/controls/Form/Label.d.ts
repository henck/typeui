import * as React from 'react';
interface ILabelProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * An inline label floats before its control, not above it.
     * @default false
     */
    inline?: boolean;
    /**
     * A required label gets an asterisk.
     * @default false
     */
    required?: boolean;
}
declare class LabelBase extends React.Component<ILabelProps, {}> {
    render(): JSX.Element;
}
declare const Label: import("styled-components").StyledComponent<typeof LabelBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Label };
