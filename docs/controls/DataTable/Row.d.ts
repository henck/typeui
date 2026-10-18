import * as React from 'react';
interface IRowProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** Row top offset in pixels. */
    top: number;
    /** Event is fired when row is clicked. */
    onClick?: () => void;
}
declare const Row: (props: IRowProps) => React.JSX.Element;
export { Row, type IRowProps };
