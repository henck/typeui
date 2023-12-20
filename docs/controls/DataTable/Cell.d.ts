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
    /** Show vertical grid lines? */
    grid?: boolean;
    /** If true, column always appears no matter the screen size. */
    force?: boolean;
    /** Event is fired when cell is clicked. */
    onClick?: () => void;
    /** Event is fired when cell is double-clicked. */
    onDoubleClick?: () => void;
}
declare class CellBase extends React.Component<ICellProps, {}> {
    render(): JSX.Element;
}
declare const Cell: import("styled-components").StyledComponent<typeof CellBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Cell };
