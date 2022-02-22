import * as React from 'react';
interface ICircleProps {
    className?: string;
    children?: React.ReactNode;
    /** onClick handler for segment clicks. */
    onClick?: (index: number) => void;
    /** Circle radius in pixels. Defaults to 100. */
    radius?: number;
    /** Segments color. Defauls to dark grey. */
    color?: string;
}
declare class Circle extends React.Component<ICircleProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export { Circle };
