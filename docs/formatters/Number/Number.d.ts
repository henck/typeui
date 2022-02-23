import * as React from 'react';
interface INumberProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Value to format. This can be a string or a number.
     */
    value: number | string;
    /**
     * Number of fractional digits. Defaults to `2`.
     * @default 2
     */
    decimals?: number;
}
declare class Number extends React.Component<INumberProps> {
    render(): string;
}
export { Number };
