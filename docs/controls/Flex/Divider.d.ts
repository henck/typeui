import * as React from 'react';
interface IDividerProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /** @ignore */
    stackable?: boolean;
}
declare class Divider extends React.Component<IDividerProps> {
    render: () => JSX.Element;
}
export { Divider };
