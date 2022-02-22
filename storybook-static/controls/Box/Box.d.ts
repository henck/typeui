import * as React from 'react';
interface IBoxProps {
    className?: string;
    children?: React.ReactNode;
    /** Box fill color. Default is `pink`. */
    color?: string;
}
declare class Box extends React.Component<IBoxProps, {}> {
    render(): JSX.Element;
}
export { Box };
