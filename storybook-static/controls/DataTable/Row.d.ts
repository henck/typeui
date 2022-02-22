import * as React from 'react';
interface IRowProps {
    className?: string;
    children?: React.ReactNode;
    /** Row top offset in pixels. */
    top: number;
    /** Event is fired when row is clicked. */
    onClick?: () => void;
}
declare class Row extends React.PureComponent<IRowProps> {
    render(): JSX.Element;
}
export { Row };
