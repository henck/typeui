import * as React from 'react';
interface IRowProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** @ignore */
    stackable?: boolean;
    /** @ignore */
    divided?: boolean;
    /** @ignore */
    compact?: boolean;
    /** @ignore */
    gutter?: number;
}
declare const Row: (props: IRowProps) => React.JSX.Element;
export { Row, type IRowProps };
