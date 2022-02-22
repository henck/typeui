import * as React from 'react';
import { IconType } from '../Icon/IconType';
interface IIconPaneProps {
    className?: string;
    children?: React.ReactNode;
    /** Pane activation icon. */
    icon: IconType;
    /** A padded pane adds padding to its content. */
    padded?: boolean;
    /** Override default pane width of 400 pixels. */
    width?: number;
}
interface IState {
    open: boolean;
}
declare class IconPane extends React.Component<IIconPaneProps, IState> {
    constructor(props: IIconPaneProps);
    handleOpenPane: () => void;
    handleClosePane: () => void;
    render(): JSX.Element;
}
export { IconPane };
