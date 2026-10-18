import * as React from 'react';
interface ISelectorProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** Fired when selector is clicked. */
    onClick: () => void;
    /** Fired when clear icon is clicked. */
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
declare const Selector: import("styled-components/dist/types").IStyledComponentBase<"web", ISelectorProps> & string & Omit<(props: ISelectorProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Selector };
