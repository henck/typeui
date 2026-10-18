import * as React from 'react';
interface IColumnProps {
    /** @ignore */
    className?: string;
    /** @ignore */
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
declare const Column: (props: IColumnProps) => React.JSX.Element;
export { Column, type IColumnProps };
