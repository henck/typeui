import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** Value to show */
    value: string;
    /** Location of number in degrees (0 = top) */
    degrees: number;
    /** Is the clock number currently selected? */
    active: boolean;
}
declare const ClockNumber: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("styled-components/dist/types").Merged<IProps, {
    left?: number;
    top?: number;
    yFix?: number;
}>, "left" | "top" | "className" | "value" | "active" | "degrees" | "yFix"> & Partial<Pick<import("styled-components/dist/types").Merged<IProps, {
    left?: number;
    top?: number;
    yFix?: number;
}>, "left" | "top" | "className" | "value" | "active" | "degrees" | "yFix">>> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { ClockNumber };
