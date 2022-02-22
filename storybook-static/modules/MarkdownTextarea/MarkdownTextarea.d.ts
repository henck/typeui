import * as React from 'react';
import { ITextareaProps } from '../../controls/Textarea';
interface IProps {
    classname?: string;
    /**
     * Optional translation for "Text" label
     */
    label_text?: React.ReactNode;
    /**
     * Optional translation for "Preview" label
     */
    label_preview?: React.ReactNode;
    /**
     * Optional translation for "is supported" label
     */
    label_markdown?: React.ReactNode;
}
interface IState {
    tabIndex: number;
}
declare class MarkdownTextarea extends React.Component<IProps & ITextareaProps, IState> {
    constructor(props: IProps & ITextareaProps);
    private handleTabChange;
    render(): JSX.Element;
}
export { MarkdownTextarea };
