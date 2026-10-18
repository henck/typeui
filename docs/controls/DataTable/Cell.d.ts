import * as React from 'react';
import { Float } from '../Types';
interface ICellProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: (item: any) => React.ReactNode;
    item: any;
    /** Column weight. Defaults to 1. */
    weight?: number;
    /** Text alignment. Defaults to 'left'. */
    align?: Float;
    /** Show vertical grid lines? */
    grid?: boolean;
    /** If true, column always appears no matter the screen size. */
    force?: boolean;
    /** Event is fired when cell is clicked. */
    onClick?: () => void;
    /** Event is fired when cell is double-clicked. */
    onDoubleClick?: () => void;
}
declare const Cell: import("styled-components/dist/types").IStyledComponentBase<"web", ICellProps> & string & Omit<(props: ICellProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Cell };
