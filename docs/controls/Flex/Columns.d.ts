import * as React from 'react';
interface IColumnsProps {
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Number of columns to show.
     */
    count: number;
}
declare const Columns: (props: IColumnsProps) => React.JSX.Element;
export { Columns, type IColumnsProps };
