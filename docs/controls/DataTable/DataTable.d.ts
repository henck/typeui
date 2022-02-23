import * as React from 'react';
import { TDir } from '../Types';
import { DataColumn } from './DataColumn';
interface IDataTableProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Data for table. TableData.Column elements must provide function
     * to render item fields in each column.
     */
    data: any[];
    /** Current DataTable order field name, e.g. `name`. */
    order?: string;
    /** Current DataTable order direction (`asc` or `desc`). */
    dir?: TDir;
    /**
     * Optional vertical offset (in pixels) to scroll to after update.
     * @default 0
     */
    scrollTop?: number;
    /** Callback that receives scroll offset in pixels when a scroll operations ends. */
    onScroll?: (scrollTop: number) => void;
    /** This callback is called when the table needs to fetch more items. */
    onFetch?: (offset: number, count: number) => void;
    /** This callback is called when an item is clicked. */
    onClick?: (item: any) => void;
    /** This callback is called when the table sets a new order. */
    onOrder?: (order: string, dir?: TDir) => void;
    /** Element to show when there is no data. The DataTable has a default "no data" message. */
    nodata?: React.ReactNode;
    /**
     * Currently loading? If true, an amination appears.
     * @default false
     */
    loading?: boolean;
    /**
     * Show error state? This will offer a default error message,  and a "Retry"
     * button if onFetch is set.
     * @default false
     */
    error?: boolean;
    /** If set, this message replaces the default error message. */
    errorMessage?: React.ReactNode;
    /**
     * If set, DataTable shows vertical grid lines.
     * @default false
     */
    grid?: boolean;
}
/**
 * @example
 * <DataTable
 *   error={false} loading={false} scrollTop={0}
 *   onScroll={(scrollTop: number) => {}}
 *   data={[
 *     { name: "John",   age: 24, sport: "Soccer"},
 *     { name: "Mary",   age: 18, sport: "Polo"},
 *     { name: "Bert",   age: 21, sport: "Basketball"}
 *   ]}
 *   onFetch={(offset: number, count: number) => {}}
 *   onOrder={(order: string, dir?: TDir) => {}}
 *   order="name" dir="asc">
 *
 *   <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item:IItem) => item.name}</DataTable.Column>
 *   <DataTable.Column weight={1} label="Age" order="age" dir="asc">{(item:IItem) => item.age}</DataTable.Column>
 *   <DataTable.Column weight={1} label="Sport" order="sport" dir="asc">{(item:IItem) => item.sport}</DataTable.Column>
 *
 * </DataTable>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-datatable--properties
 */
declare class DataTable extends React.Component<IDataTableProps> {
    /**
     * A single column in a DataTable. Its child element must be a function that takes an item
     * provided to it by the parent DataTable.
     *
     * @example
     * <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item: MyItem) => item.name}</DataTable.Column>
     */
    static Column: typeof DataColumn;
    render: () => JSX.Element;
}
export { DataTable };
