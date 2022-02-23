import * as React from 'react';
interface IMarkdownProps {
    source: string;
}
declare class Markdown extends React.Component<IMarkdownProps> {
    /**
     * In order to render <Header> components, we need to know the header level
     * provided by react-markdown and convert it to a Header size.
     */
    private headingRenderer;
    /**
     * In order to render <List> components, we need to know if the list is
     * ordered or bulleted. react-markdown provides an ordered:boolean.
     */
    private listRenderer;
    render(): JSX.Element;
}
export { Markdown };
