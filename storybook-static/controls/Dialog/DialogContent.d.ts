import * as React from 'react';
interface IDialogContentProps {
    className?: string;
    children?: React.ReactNode;
}
declare class DialogContent extends React.Component<IDialogContentProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export { DialogContent };
