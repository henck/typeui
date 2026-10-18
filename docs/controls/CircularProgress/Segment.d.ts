import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /**
     * Segment color. Defaults to theme primary color.
     */
    color?: string;
    /**
     * Size of segment in degrees.
     */
    angleBody: number;
    /**
     * OFfset of segment in degrees.
     */
    angleOffset: number;
}
declare const Segment: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("styled-components/dist/types").Merged<IProps, {
    skew?: number;
}>, "className" | "color" | "angleBody" | "angleOffset" | "skew"> & Partial<Pick<import("styled-components/dist/types").Merged<IProps, {
    skew?: number;
}>, "className" | "color" | "angleBody" | "angleOffset" | "skew">>> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Segment };
