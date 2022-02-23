import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    /** Label to show, if any */
    label?: string;
    /**
     * Place label inline with field control.
     * @default false
     */
    inline?: boolean;
    /** Relative width of field. If not set, field will not flex to fill available width. */
    width?: number;
    /** Hint to show */
    hint?: React.ReactNode;
}
declare class Uncontrolled extends React.Component<IProps, {}> {
    render: () => JSX.Element;
}
export { Uncontrolled };
