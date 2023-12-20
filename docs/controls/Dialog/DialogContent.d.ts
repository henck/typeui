import * as React from 'react';
interface IDialogContentProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Maximum height in percentage of screen height before a scrollbar is
     * added. Defaults to 70.
     * @default 70
     */
    maxHeight?: number;
}
declare const DialogContent: {
    (props: IDialogContentProps): JSX.Element;
    displayName: string;
};
export { DialogContent, IDialogContentProps };
