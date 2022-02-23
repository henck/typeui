import * as React from 'react';
interface IGroupProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Divide field widths evenly.
     * @default false
     */
    equal?: boolean;
}
declare class Group extends React.Component<IGroupProps> {
    render: () => JSX.Element;
}
export { Group };
