import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    index: number;
    onClick: (index: number) => void;
    color: string;
    radius: number;
    /**
     * Size of slice in degrees
     */
    angleBody: number;
    /**
     * Offfset of slice in degrees
     */
    angleOffset: number;
}
declare const Slice: (props: IProps) => React.JSX.Element;
export { Slice, type IProps };
