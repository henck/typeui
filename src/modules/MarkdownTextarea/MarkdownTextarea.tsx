import * as React from 'react';
import styled from '../../styles/Theme';
import { ITextareaProps, Textarea } from '../../controls/Textarea';
import { Segment } from '../../controls/Segment';
import { Tabs } from '../../controls/Tabs';
import { Markdown } from '../../formatters/Markdown';

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

class MarkdownTextarea extends React.Component<IProps & ITextareaProps, IState> {
  constructor(props: IProps & ITextareaProps) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }

  private handleTabChange = (index: number) => {
    this.setState({ tabIndex: index });
  }

  render() {
    let { className, label_text, label_preview, label_markdown, ...textAreaProps } = this.props;
    return (
      <div className={className}>
        <Segment tight attached="top">
          <Tabs underlined onTabChange={this.handleTabChange}>
            <Tabs.Pane label={label_text ? label_text : 'Text'}></Tabs.Pane>
            <Tabs.Pane label={label_preview ? label_preview : 'Preview'}></Tabs.Pane>
          </Tabs>
          <div style={{position: 'relative'}}>
            <div style={{overflow: 'hidden', width: this.state.tabIndex == 0 ? '100%' : '1px'}}>
              <Textarea monospaced fluid transparent {...textAreaProps}/>
            </div>
            {this.state.tabIndex == 1 &&
            <Scrollable rows={this.props.rows}>
              <Markdown source={textAreaProps.value}/>
            </Scrollable>}
          </div>
        </Segment>
        <Segment tight secondary attached="bottom">
          <Options>
             <a target="_blank" href="https://www.markdownguide.org/">Markdown</a> {label_markdown ? label_markdown : 'is supported'}
           </Options>
        </Segment>
      </div>
    );
  }
}

class ScrollableBase extends React.Component<{className?: string; children?: React.ReactNode; rows?: number}> {
  render() {
    let p = this.props;
    return <div className={p.className}>{p.children}</div>
  }
}

const Scrollable = styled(ScrollableBase)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: none;
`

const Options = styled('div')`
  font-size: 9px;
  a { 
    color: steelblue; 
    text-decoration: none;
  }
`

export { MarkdownTextarea };
