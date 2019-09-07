import * as React from 'react';
import styled from '../../styles/Theme';
import { ITextareaProps, Textarea } from '../../controls/Textarea';
import { Segment } from '../../controls/Segment';
import { Tabs } from '../../controls/Tabs';
import { Markdown } from '../../formatters/Markdown';

class MarkdownTextarea extends React.Component<ITextareaProps> {
  render() {
    let { className, ...otherProps } = this.props;
    return (
      <div className={className}>
        <Segment tight attached="top">
          <Tabs underlined>
            <Tabs.Pane label="Text">
              <Textarea monospaced fluid transparent {...otherProps}/>
            </Tabs.Pane>
            <Tabs.Pane label="Preview">
              <Scrollable>
                <Markdown source={otherProps.value}/>
              </Scrollable>
            </Tabs.Pane>
          </Tabs>
        </Segment>
        <Segment tight secondary attached="bottom">
          <Options>
             <a target="_blank" href="https://www.markdownguide.org/">Markdown</a> is supported
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