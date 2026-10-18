import * as React from 'react';
interface IDialogFooterProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** Optional alignment of items in the Dialog footer. Defaults to `end`. */
    align?: 'start' | 'end' | 'space-between';
}
declare const DialogFooter: {
    (props: IDialogFooterProps): React.JSX.Element;
    displayName: string;
};
export { DialogFooter, type IDialogFooterProps };
