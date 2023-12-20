import * as React from 'react';
interface IDialogWindowProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    windowRef?: any;
    width?: number;
}
declare const DialogWindow: import("styled-components").StyledComponent<(props: IDialogWindowProps) => JSX.Element, import("../../styles/Theme").IThemeInterface, {}, never>;
export { DialogWindow };
