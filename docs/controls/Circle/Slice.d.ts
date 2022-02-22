import * as React from 'react';
interface IProps {
    className?: string;
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
declare class Slice extends React.Component<IProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export { Slice };
