import * as React from 'react';
/**
 *  Textarea validates itself using the HTML validation API whenever
 *  its content changes. Listeners can use onValidate to obtain
 *  the resulting ValidityState.
 */
interface ITextareaProps {
    className?: string;
    /** Textarea name. */
    name?: string;
    /** Textarea value. */
    value?: any;
    /** Placeholder to show when the Textarea is empty. */
    placeholder?: string;
    /** Mark Textarea as disabled. */
    disabled?: boolean;
    /** Removes Textarea border. */
    transparent?: boolean;
    /** Textarea takes up all available horizontal space. */
    fluid?: boolean;
    /** Height in rows. */
    rows?: number;
    /** Minimum height in pixels. */
    minHeight?: number;
    /** Is the Textarea in an error state? */
    error?: boolean;
    /** If set, Textarea will use a monospaced font. */
    monospaced?: boolean;
    /** Listeners are notified whenever the user interacts with the Textarea. */
    onChange?: (value: any) => void;
}
declare class Textarea extends React.Component<ITextareaProps, {}> {
    static displayName: string;
    render(): JSX.Element;
}
export { Textarea, ITextareaProps };
