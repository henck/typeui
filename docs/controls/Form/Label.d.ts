import * as React from 'react';
interface ILabelProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * An inline label floats before its control, not above it.
     * @default false
     */
    inline?: boolean;
    /**
     * A required label gets an asterisk.
     * @default false
     */
    required?: boolean;
    /**
     * If true, show no asterisk for required fields.
     */
    noStar?: boolean;
}
declare const Label: import("styled-components/dist/types").IStyledComponentBase<"web", ILabelProps> & string & Omit<(props: ILabelProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Label };
