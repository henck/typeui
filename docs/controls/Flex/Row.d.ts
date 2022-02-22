import * as React from 'react';
interface IRowProps {
    className?: string;
    children?: React.ReactNode;
    stackable?: boolean;
    divided?: boolean;
    compact?: boolean;
    gutter?: number;
}
declare class Row extends React.Component<IRowProps, {}> {
    render(): JSX.Element;
}
export { Row };
