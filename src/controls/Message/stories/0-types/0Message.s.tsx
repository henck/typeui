import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Message } from '../../../Message'

storiesOf('Controls/Message/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A simple message.
    `
  })
  .addWithJSX(
    'Message',
  () => (
  <div>
    <Message>{text('label', "Message text")}</Message>
  </div>
  ));  
