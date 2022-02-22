import * as React from 'react';
import { IIconProps } from '../Icon/Icon';
import { IconType } from '../Icon/IconType';
interface IIconPanelProps {
    className?: string;
    children?: React.ReactNode;
    icon: IconType | IIconProps;
    /** A padded pane adds padding to its content. */
    padded?: boolean;
    /** Override default panel width of 200 pixels */
    width?: number;
}
interface IState {
    open: boolean;
}
declare class IconPanel extends React.Component<IIconPanelProps, IState> {
    constructor(props: IIconPanelProps);
    handleOpenPanel: () => void;
    handleClosePanel: () => void;
    render(): JSX.Element;
}
export { IconPanel };
