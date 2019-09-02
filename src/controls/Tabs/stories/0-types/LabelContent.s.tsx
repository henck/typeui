import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Tabs } from '../../../Tabs'
import { Icon } from '../../../Icon'
import { Label } from '../../../Label'
import { Flex } from '../../../Flex'

storiesOf('Tabs/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The Pane \`label\` can contain arbitrary content.

    To get the content to vertically align properly, a \`Flex.Quick\` can help.
    `
  })
  .addWithJSX(
    'Label Content',
  () => (
  <div>
    <Tabs      
      underlined={boolean('underlined', false)}>
      <Tabs.Pane label={(<Flex.Quick><Icon name="code"/> Hello</Flex.Quick>)}>
        <p>Content for first tab.</p>
        <p>Additional line of content.</p>
      </Tabs.Pane>
      <Tabs.Pane label={(<span>Messages <Label>15</Label></span>)}>
        Content for second tab.
      </Tabs.Pane>
      <Tabs.Pane label="Three">
        Content for third tab.
      </Tabs.Pane>
    </Tabs>
  </div>
  ));  
