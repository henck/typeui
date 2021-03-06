import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs/react';
import { Tabs } from '../../../Tabs'

storiesOf('Controls/Tabs/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A simple Tabs collection.
    `
  })
  .addWithJSX(
    'Tabs',
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
