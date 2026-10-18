import * as React from 'react';
interface ICounterProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    nodeRef?: React.Ref<HTMLDivElement>;
    /** Total number of records */
    count: number;
    /** 1-based index of first record shown */
    first: number;
    /** 1-based index of last record shown */
    last: number;
}
declare const Counter: import("styled-components/dist/types").IStyledComponentBase<"web", ICounterProps> & string & Omit<(props: ICounterProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Counter };
