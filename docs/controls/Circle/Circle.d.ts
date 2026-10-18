import * as React from 'react';
interface ICircleProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /** onClick handler for segment clicks. */
    onClick?: (index: number) => void;
    /**
     * Circle radius in pixels. Defaults to 100.
     * @default 100
     */
    radius?: number;
    color?: string;
}
declare const Circle: (props: ICircleProps) => React.JSX.Element;
export { Circle, type ICircleProps };
