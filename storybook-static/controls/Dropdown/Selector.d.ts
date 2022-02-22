import * as React from 'react';
interface ISelectorProps {
    className?: string;
    children?: React.ReactNode;
    onClick: () => void;
    onClear?: () => void;
    /** Dropdown currently disabled? */
    disabled?: boolean;
    /** Is the Dropdown currently open? */
    open: boolean;
    /** A Dropbox can open upwards, which affects its styles. */
    upwards: boolean;
    /** Is the Dropdown displayed inline, i.e. without a border? */
    inline?: boolean;
    /** Is this label a placeholder? Then it will be lighter in color. */
    placeholder?: boolean;
    /** Error state? */
    error?: boolean;
    /** Multiple selection? This will result in smaller padding to accommodate <Selection> items. */
    multiple?: boolean;
}
declare class SelectorBase extends React.Component<ISelectorProps, {}> {
    private handleClear;
    render(): JSX.Element;
}
declare const Selector: import("styled-components").StyledComponent<typeof SelectorBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Selector };
