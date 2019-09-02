import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Tabs } from '../../Tabs'

storiesOf('Tabs', module)
  .addDecorator(withInfo({...withInfoSettings, propTablesExclude: [ ]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All tabs properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Tabs      
      underlined={boolean('underlined', false)}>
      <Tabs.Pane label="One">
        <p>Content for first tab.</p>
        <p>Additional line of content.</p>
      </Tabs.Pane>
      <Tabs.Pane label="Two">
        Content for second tab.
      </Tabs.Pane>
      <Tabs.Pane label="Three">
        Content for third tab.
      </Tabs.Pane>
    </Tabs>
  </div>
  ));  
