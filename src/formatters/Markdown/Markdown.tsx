import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Header } from '../../controls/Header';
import { List } from '../../controls/List';
import { Image } from '../../controls/Image';
import { Table } from '../../controls/Table';

interface IMarkdownProps {
  source: string;
}

/*
 * The Markdown formatter takes a markdown string (source) and renders
 * HTML, with TypeUI components thrown in where necessary.
 */
class Markdown extends React.Component<IMarkdownProps> {

  /**
   * In order to render <Header> components, we need to know the header level
   * provided by react-markdown and convert it to a Header size.
   */
  private headingRenderer(props: { children: React.ReactNode, level: number} ) {
    switch(props.level) {
      case 2: return <Header size='h2'>{props.children}</Header>
      case 3: return <Header size='h3'>{props.children}</Header>
      case 4: return <Header size='h4'>{props.children}</Header>
      case 5: return <Header size='h5'>{props.children}</Header>
      case 6: return <Header size='h6'>{props.children}</Header>
      default: 
        return <Header size='h1'>{props.children}</Header>
    }
  }

  /**
   * In order to render <List> components, we need to know if the list is
   * ordered or bulleted. react-markdown provides an ordered:boolean. 
   */
  private listRenderer(props: { ordered: boolean, children: React.ReactNode}) {
    // Filter out any string children.
    let children = React.Children.toArray(props.children).filter((c) => typeof c !== "string");
    return <List ordered={props.ordered} bulleted={!props.ordered}>{children}</List>
  }

  render() {
    let p = this.props;
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: this.headingRenderer,
          h2: this.headingRenderer,
          h3: this.headingRenderer,
          h4: this.headingRenderer,
          h5: this.headingRenderer,
          h6: this.headingRenderer,
          img: ({node, ...props}) => <Image size="medium" {...props as any}>Image resource not found.</Image>,
          ul: this.listRenderer,
          li: ({ node, children, ...props}) => <List.Item>{children}</List.Item>,
          table: ({node, children, ...props}) => <Table>{children}</Table>

        }}
      >
        {p.source}
      </ReactMarkdown>
    );
  }
}

export { Markdown };
