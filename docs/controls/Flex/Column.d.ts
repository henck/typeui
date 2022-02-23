import * as React from 'react';
interface IColumnProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Column relative weight, for cell growth. If not specified, cell doesn't flex.
     */
    width?: number;
    /** @ignore */
    stackable?: boolean;
    /** @ignore */
    gutter?: number;
}
declare class Column extends React.Component<IColumnProps> {
    render: () => JSX.Element;
}
export { Column };
