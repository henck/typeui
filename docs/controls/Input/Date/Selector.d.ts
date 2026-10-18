import * as React from 'react';
interface ISelectorProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    nodeRef?: React.Ref<HTMLDivElement>;
    /** If true, do not accept future dates (beyond today). */
    nofuture?: boolean;
    value: any;
    /** If true, selector opens above the input. */
    upward: boolean;
    /** If true, selector opens to the right of the input. */
    right: boolean;
    /** Callback to call when date is selected, or selector is cancelled. */
    onSelect: any;
}
declare const Selector: import("styled-components/dist/types").IStyledComponentBase<"web", ISelectorProps> & string & Omit<(props: ISelectorProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Selector };
