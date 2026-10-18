import * as React from 'react';
interface IDialogWindowProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    windowRef?: React.Ref<HTMLDivElement>;
    width?: number;
}
declare const DialogWindow: import("styled-components/dist/types").IStyledComponentBase<"web", IDialogWindowProps> & string & Omit<(props: IDialogWindowProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { DialogWindow };
