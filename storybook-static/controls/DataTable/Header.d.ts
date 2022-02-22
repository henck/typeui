import * as React from 'react';
import { Float } from '../Types';
interface IHeaderProps {
    className?: string;
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
declare class HeaderBase extends React.Component<IHeaderProps, {}> {
    render(): JSX.Element;
}
declare const Header: import("styled-components").StyledComponent<typeof HeaderBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Header };
