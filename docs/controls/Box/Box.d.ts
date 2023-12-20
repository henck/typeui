import * as React from 'react';
interface IBoxProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Box fill color. Default is `pink`.
     * @default pink
     */
    color?: string;
}
declare const Box: (props: IBoxProps) => JSX.Element;
export { Box };
