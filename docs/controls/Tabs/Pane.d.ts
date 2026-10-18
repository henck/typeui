import * as React from 'react';
interface IPaneProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Tab label. Can be JSX.
     */
    label: React.ReactNode;
    /** @ignore */
    active?: boolean;
    /** @ignore */
    nohiddenrender?: boolean;
}
declare const Pane: (props: IPaneProps) => React.JSX.Element;
export { Pane, type IPaneProps };
