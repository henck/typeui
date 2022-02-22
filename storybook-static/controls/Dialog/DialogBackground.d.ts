import * as React from 'react';
interface IDialogBackgroundProps {
    className?: string;
}
declare class DialogBackgroundBase extends React.Component<IDialogBackgroundProps, {}> {
    render(): JSX.Element;
}
declare const DialogBackground: import("styled-components").StyledComponent<typeof DialogBackgroundBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { DialogBackground };
