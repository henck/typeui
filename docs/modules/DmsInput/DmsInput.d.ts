import * as React from 'react';
interface IProps {
    className?: string;
    /** Latitude or longitude? */
    isLatitude: boolean;
    /** Input name. */
    name?: string;
    /** Input value. */
    value?: any;
    /** Marks input as disabled. */
    disabled?: boolean;
    /** An input can show an error state. */
    error?: boolean;
    onChange?: (value: any) => void;
}
declare class DmsInput extends React.Component<IProps> {
    render: () => JSX.Element;
}
export { DmsInput };
