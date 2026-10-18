import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Header } from '../../controls/Header';
import { List } from '../../controls/List';
import { Image } from '../../controls/Image';
import { Table } from '../../controls/Table';
/*
 * The Markdown formatter takes a markdown string (source) and renders
 * HTML, with TypeUI components thrown in where necessary.
 */
class Markdown extends React.Component {
    /**
     * In order to render <Header> components, we need to know the header level
     * provided by react-markdown and convert it to a Header size.
     */
    headingRenderer(props) {
        switch (props.level) {
            case 2: return _jsx(Header, { size: 'h2', children: props.children });
            case 3: return _jsx(Header, { size: 'h3', children: props.children });
            case 4: return _jsx(Header, { size: 'h4', children: props.children });
            case 5: return _jsx(Header, { size: 'h5', children: props.children });
            case 6: return _jsx(Header, { size: 'h6', children: props.children });
            default:
                return _jsx(Header, { size: 'h1', children: props.children });
        }
    }
    /**
     * In order to render <List> components, we need to know if the list is
     * ordered or bulleted. react-markdown provides an ordered:boolean.
     */
    listRenderer(props) {
        // Filter out any string children.
        let children = React.Children.toArray(props.children).filter((c) => typeof c !== "string");
        return _jsx(List, { ordered: props.ordered, bulleted: !props.ordered, children: children });
    }
    render() {
        let p = this.props;
        return (_jsx(ReactMarkdown, { remarkPlugins: [remarkGfm], components: {
                h1: this.headingRenderer,
                h2: this.headingRenderer,
                h3: this.headingRenderer,
                h4: this.headingRenderer,
                h5: this.headingRenderer,
                h6: this.headingRenderer,
                img: ({ node, ...props }) => _jsx(Image, { size: "medium", ...props, children: "Image resource not found." }),
                ul: this.listRenderer,
                li: ({ node, children, ...props }) => _jsx(List.Item, { children: children }),
                table: ({ node, children, ...props }) => _jsx(Table, { children: children })
            }, children: p.source }));
    }
}
export { Markdown };
