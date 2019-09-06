import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { action } from '@storybook/addon-actions';
import { Tabs } from '../../../Tabs'

storiesOf('Controls/Tabs/Events', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A tab change can be detected by listening to the \`onTabChange\` event.
    `
  })
  .addWithJSX(
    'onTabChange',
  () => (
  <div>
    <Tabs onTabChange={action('onTabChange')}>
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
