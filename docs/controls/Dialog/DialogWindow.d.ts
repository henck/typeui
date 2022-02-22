import * as React from 'react';
interface IDialogWindowProps {
    className?: string;
    children?: React.ReactNode;
    windowRef?: any;
    width?: number;
}
declare class DialogWindowBase extends React.Component<IDialogWindowProps, {}> {
    render(): JSX.Element;
}
declare const DialogWindow: import("styled-components").StyledComponent<typeof DialogWindowBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { DialogWindow };
