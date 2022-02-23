import * as React from 'react';
import { IIconProps } from '../Icon/Icon';
import { IconType } from '../Icon/IconType';
interface IIconPanelProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Panel icon props.
     */
    icon: IconType | IIconProps;
    /**
     * A padded pane adds padding to its content.
     * @default false
     */
    padded?: boolean;
    /**
     * Override default panel width of 200 pixels
     * @default 200
     */
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
