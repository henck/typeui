import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
import { Textarea } from '../../controls/Textarea';
import { Segment } from '../../controls/Segment';
import { Tabs } from '../../controls/Tabs';
import { Markdown } from '../../formatters/Markdown';
class MarkdownTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabChange = (index) => {
            this.setState({ tabIndex: index });
        };
        this.state = {
            tabIndex: 0
        };
    }
    render() {
        let { className, label_text, label_preview, label_markdown, ...textAreaProps } = this.props;
        return (_jsxs("div", { className: className, children: [_jsxs(Segment, { tight: true, attached: "top", children: [_jsxs(Tabs, { underlined: true, onTabChange: this.handleTabChange, children: [_jsx(Tabs.Pane, { label: label_text ? label_text : 'Text' }), _jsx(Tabs.Pane, { label: label_preview ? label_preview : 'Preview' })] }), _jsxs("div", { style: { position: 'relative' }, children: [_jsx("div", { style: { overflow: 'hidden', width: this.state.tabIndex == 0 ? '100%' : '1px' }, children: _jsx(Textarea, { monospaced: true, fluid: true, transparent: true, ...textAreaProps }) }), this.state.tabIndex == 1 &&
                                    _jsx(Scrollable, { rows: this.props.rows, children: _jsx(Markdown, { source: textAreaProps.value }) })] })] }), _jsx(Segment, { tight: true, secondary: true, attached: "bottom", children: _jsxs(Options, { children: [_jsx("a", { target: "_blank", href: "https://www.markdownguide.org/", children: "Markdown" }), " ", label_markdown ? label_markdown : 'is supported'] }) })] }));
    }
}
class ScrollableBase extends React.Component {
    render() {
        let p = this.props;
        return _jsx("div", { className: p.className, children: p.children });
    }
}
const Scrollable = styled(ScrollableBase) `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: none;
`;
const Options = styled.div `
  font-size: 9px;
  a { 
    color: steelblue; 
    text-decoration: none;
  }
`;
export { MarkdownTextarea };
