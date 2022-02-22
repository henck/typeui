import * as React from 'react';
import { Float } from '../Types';
interface ICellProps {
    className?: string;
    children?: React.ReactNode;
    item: any;
    /** Column weight. Defaults to 1. */
    weight?: number;
    /** Text alignment. Defaults to 'left'. */
    align?: Float;
}
declare class CellBase extends React.Component<ICellProps, {}> {
    render(): JSX.Element;
}
declare const Cell: import("styled-components").StyledComponent<typeof CellBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Cell };
