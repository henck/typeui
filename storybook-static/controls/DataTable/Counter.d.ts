import * as React from 'react';
interface ICounterProps {
    className?: string;
    /** Total number of records */
    count: number;
    /** 1-based index of first record shown */
    first: number;
    /** 1-based index of last record shown */
    last: number;
}
/**
 * Counter works with DataTable to show a label containing
 * the total number of records, and the indices of the first to
 * last record currently being scrolled to.
 */
declare class CounterBase extends React.Component<ICounterProps, {}> {
    render(): JSX.Element;
}
declare const Counter: import("styled-components").StyledComponent<typeof CounterBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Counter };
