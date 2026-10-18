import * as React from 'react';
interface IGroupProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Divide field widths evenly.
     * @default false
     */
    equal?: boolean;
}
declare const Group: (props: IGroupProps) => React.JSX.Element;
export { Group, type IGroupProps };
