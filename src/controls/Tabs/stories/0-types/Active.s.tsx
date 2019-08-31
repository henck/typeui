import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean, number } from '@storybook/addon-knobs/react';
import { Tabs, Segment, Icon, Label, Flex } from '../../../';

storiesOf('Tabs/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The initially active tab can be set with the \`active\` property. It is 0-based.

    If \`active\` is omitted, then the initially active tab is tab 0.
    `
  })
  .addWithJSX(
    'Active',
  () => (
  <div>
    <Tabs      
      underlined={boolean('underlined', false)}
      active={number('active', 1)}>
      <Tabs.Pane label="One">
        <Segment>
          <p>Content for first tab.</p>
          <p>Additional line of content.</p>
        </Segment>
      </Tabs.Pane>
      <Tabs.Pane label="Two">
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
