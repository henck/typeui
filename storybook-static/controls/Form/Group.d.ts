import * as React from 'react';
interface IGroupProps {
    className?: string;
    children?: React.ReactNode;
    /** Divide field widths evenly. */
    equal?: boolean;
}
declare class Group extends React.Component<IGroupProps, {}> {
    render(): JSX.Element;
}
export { Group };
