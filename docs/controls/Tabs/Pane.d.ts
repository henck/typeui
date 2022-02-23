import * as React from 'react';
interface IPaneProps {
    /** @ignore */
    className?: string;
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
declare class Pane extends React.Component<IPaneProps> {
    render: () => JSX.Element;
}
export { Pane };
