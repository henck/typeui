import * as React from 'react';
interface IDividerProps {
    className?: string;
    children?: React.ReactNode;
    stackable?: boolean;
}
declare class Divider extends React.Component<IDividerProps, {}> {
    render(): JSX.Element;
}
export { Divider };
