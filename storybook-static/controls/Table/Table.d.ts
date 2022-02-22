import * as React from 'react';
interface ITableProps {
    className?: string;
    children?: React.ReactNode;
    /** If set, adds row striping. */
    striped?: boolean;
    /** If set, removes table border. */
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
declare class Table extends React.PureComponent<ITableProps, {}> {
    render(): JSX.Element;
}
export { Table };
