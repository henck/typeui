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
    The message type can be \`info\`, \`warning\`, \`success\` or \`error\`.
    `
  })
  .addWithJSX(
    'Type',
  () => (
  <div>
    <Message type="info">
      <Message.Header>Was this what you wanted?</Message.Header>
      <p>
        Did you know it's been a while?
      </p>
    </Message>
    <Message type="warning">
      <Message.Header>You must register before you can do that!</Message.Header>
      <p>
        Visit our registration page, then try again.
      </p>
    </Message>
    <Message type="success">
      <Message.Header>You are eligible for a reward</Message.Header>
      <p>
        Go to your special offers page to see how.
      </p>
    </Message>
    <Message type="error">
      <Message.Header>We're sorry we can't apply that discount</Message.Header>
      <p>
        That offer has expired.
      </p>
    </Message>                                                
  </div>
  ));  
