import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
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
  private listRenderer(props: { children: React.ReactNode, ordered: boolean }) {
    return <List ordered={props.ordered} bulleted={!props.ordered}>{props.children}</List>
  }

  /**
   * We'd like to use TypeUI's <Image> component to render images,
   * so that we can set a size and an error message for load failures.
   */  
  private imageRenderer(props: { src: string, alt: string }) {
    return <Image src={props.src} alt={props.alt} size="medium">
      Image resource not found.
    </Image>
  }
  
  render() {
    let p = this.props;
    return (
      <ReactMarkdown source={p.source} renderers={{
        heading: this.headingRenderer,  // Use special Header renderer
        table: Table,                   // Use Table instead of <table> 
        list: this.listRenderer,        // Use special List renderer
        listItem: List.Item,            // Use <List.Item> instead of <li>
        image: this.imageRenderer       // Use special Image renderer
      }}/>
    );
  }
}

export { Markdown };
