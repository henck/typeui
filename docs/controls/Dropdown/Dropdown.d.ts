import * as React from 'react';
import { Column } from './Column';
interface IDropdownProps {
    /** @ignore */
    className?: string;
    /** Dropdown name, for use in forms. */
    name?: string;
    /** Data to show in Dropdown. */
    data: any[];
    /**
     * Dropdown's value can be cleared.
     * @default false
     */
    clearable?: boolean;
    /** Label function */
    label: (item: any) => React.ReactNode;
    /** Placeholder text. */
    placeholder?: string;
    /** Dropdown value.
     *  The value is an object, not an ID!
     */
    value?: any;
    /**
     * Marks dropdown as disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * A fluid Dropdown occupies all horizontal space available to it.
     * @default false
     */
    fluid?: boolean;
    /**
     * An inline Dropdown has no border. Useful for menu items.
     * @default false
     */
    inline?: boolean;
    /**
     * If set, Dropdown is in an error state.
     * @default false
     */
    error?: boolean;
    /**
     * If set, allow multiple selection.
     * @default false
     */
    multiple?: boolean;
    /**
     * If true, the search query is reset when dropdown is opened
     * (This only applies to dropdowns with an `onSearch` callback.)
     * @default false
     */
    resetOnOpen?: boolean;
    /**
     * Max items to display before a scrollbar is added. Defaults to 6.
     * @default 6
     */
    maxItems?: number;
    /**
     * Force Dropdown to always open downwards.
     * @default false;
     */
    alwaysDown?: boolean;
    /** Listeners are notified whenever the user interacts with the input. */
    onChange?: (value: any) => void;
    /** If a search callback is provided, then the Dropdown will have a search box. */
    onSearch?: (q: string) => void;
    /** If a callback is provided, then listeners are notified when the dropdown is closed. */
    onClose?: () => void;
}
/**
 * A Dropdown is a replacement for <select> (select). It opens upwards or downwards
 * depending on its position in the viewport. Its selection and dropdown items
 * are formatted using a formatting function. A Dropdown can also take a
 * search callback, which tells provides its subscriber with a search query
 * in order to provide the Dropdown with new items.
 *
 * @example
 * <Dropdown
 *   data={[{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}]}
 *   label={(item: any) => item.name}
 *   placeholder="Select one"
 * >
 *   <Dropdown.Column>{(item: any) => item.name}</Dropdown.Column>
 * </Dropdown>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-dropdown--properties
 */
declare class Dropdown extends React.Component<IDropdownProps, {}> {
    /**
     * A Dropdown.Column's child is an item formatter function. A column can optionally take
     * a weight and an alignment.
     */
    static Column: typeof Column;
    render: () => JSX.Element;
}
export { IDropdownProps, Dropdown };
