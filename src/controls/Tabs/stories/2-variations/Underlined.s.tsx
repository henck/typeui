import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Tabs, Segment } from '../../../';

storiesOf('Controls/Tabs/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A Tabs collection can be \`underlined\`.
    `
  })
  .addWithJSX(
    'Underlined',
  () => (
  <div>
    <Tabs      
      underlined={boolean('underlined', true)}>
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
