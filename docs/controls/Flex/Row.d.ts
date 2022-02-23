import * as React from 'react';
interface IRowProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /** @ignore */
    stackable?: boolean;
    /** @ignore */
    divided?: boolean;
    /** @ignore */
    compact?: boolean;
    /** @ignore */
    gutter?: number;
}
declare class Row extends React.Component<IRowProps, {}> {
    render: () => JSX.Element;
}
export { Row };
