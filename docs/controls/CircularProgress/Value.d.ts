import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * If set, text gets edge drop shadow.
     * @default false
     */
    raised?: boolean;
    /**
     * Font size factor compared to inherited font size. Defaults to 1.
     * Use 2 to increase font size 2x.
     */
    fontFactor?: number;
}
/**
 * Numeric value to show in center of control.
 */
declare const Value: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Value };
