import * as React from 'react';
import { Float } from '../Types';
interface IHeaderProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** Is column orderable? */
    orderable: boolean;
    /** Is column ordered? */
    ordered: boolean;
    /** Sort direction */
    dir?: 'asc' | 'desc';
    /** Default sort direction */
    defaultDir?: 'asc' | 'desc';
    /** OnClick for sorting. */
    onClick?: () => void;
    /** Column weight. Defaults to 1. */
    weight?: number;
    /** Text alignment. Defaults to 'left'. */
    align?: Float;
    /** If true, column always appears no matter the screen size. */
    force?: boolean;
    /** If true, then gridlines are shown. */
    grid?: boolean;
}
declare const Header: import("styled-components/dist/types").IStyledComponentBase<"web", IHeaderProps> & string & Omit<(props: IHeaderProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Header };
