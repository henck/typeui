import * as React from 'react';
interface ITableProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * If set, adds row striping.
     * @default false
     */
    striped?: boolean;
    /**
     * If set, removes table border.
     * @default false
     */
    transparent?: boolean;
}
/**
 * A Table adds some standard styling to Table elements. Ordinary th and td elements are used
 * inside. You must use thead and tbody for the styling to work correctly.
 *
 * @example
 * <Table>
 *   <thead>...</thead>
 *   <tbody>...</tbody>
 * </Table>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-table--properties
 */
declare const Table: (props: ITableProps) => React.JSX.Element;
export { Table, type ITableProps };
