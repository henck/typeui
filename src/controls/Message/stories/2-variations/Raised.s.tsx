import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Message } from '../../../Message'

storiesOf('Controls/Message/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`raised\` message has a dropshadow.
    `
  })
  .addWithJSX(
    'Raised',
  () => (
  <div>
    <Message raised>
      <Message.Header>Raised</Message.Header>
      <p>
        A raised message box attracts more attention.
      </p>
    </Message>
    <Message raised color="HotPink">
      <Message.Header>Hot Pink</Message.Header>
      <p>
        Attractive, isn't it?
      </p>
    </Message>
  </div>
  ));  
