import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** Label to show by field. Can be JSX. */
    label?: React.ReactNode;
    /**
     * If true, field has a boxed appearance. This places a border around the
     * field, which is clickable and moves focus to the contained control.
     */
    boxed?: boolean;
    /**
     * Place label inline with field control.
     * @default false
     */
    inline?: boolean;
    /**
     * Relative width of field. If not set, field will not flex to fill
     * available width.
     */
    width?: number;
    /** Hint to show */
    hint?: React.ReactNode;
}
declare const Uncontrolled: (props: IProps) => React.JSX.Element;
export { Uncontrolled, type IProps };
