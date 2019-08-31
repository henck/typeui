import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Tabs, Segment, Icon, Label, Flex } from '../../../';

storiesOf('Tabs/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The Pane \`label\` can contain arbitrary content.

    To get the content to vertically align properyl, a \`Flex.Quick\` can help.
    `
  })
  .addWithJSX(
    'Label Content',
  () => (
  <div>
    <Tabs      
      underlined={boolean('underlined', false)}>
      <Tabs.Pane label={(<Flex.Quick><Icon name="code"/> Hello</Flex.Quick>)}>
        <Segment>
          <p>Content for first tab.</p>
          <p>Additional line of content.</p>
        </Segment>
      </Tabs.Pane>
      <Tabs.Pane label={(<span>Messages <Label>15</Label></span>)}>
        <Segment>
          Content for second tab.
        </Segment>
      </Tabs.Pane>
      <Tabs.Pane label="Three">
        <Segment>
          Content for third tab.
        </Segment>
      </Tabs.Pane>
    </Tabs>
  </div>
  ));  
