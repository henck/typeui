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

class MarkdownTextarea extends React.Component<IProps & ITextareaProps> {
  render() {
    let { className, label_text, label_preview, label_markdown, ...textAreaProps } = this.props;
    return (
      <div className={className}>
        <Segment tight attached="top">
          <Tabs underlined>
            <Tabs.Pane label={label_text ? label_text : 'Text'}>
              <Textarea monospaced fluid transparent {...textAreaProps}/>
            </Tabs.Pane>
            <Tabs.Pane label={label_preview ? label_preview : 'Preview'}>
              <Scrollable>
                <Markdown source={textAreaProps.value}/>
              </Scrollable>
            </Tabs.Pane>
          </Tabs>
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

const Scrollable = styled('div')`
  height: 187px;
  margin: 1px 0 3px 0;
  padding: 9.5px 14px;
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
