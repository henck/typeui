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
    /** Gap between columns. */
    gap?: number;
}
declare const Cell: import("styled-components/dist/types").IStyledComponentBase<"web", ICellProps> & string & Omit<(props: ICellProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Cell };
