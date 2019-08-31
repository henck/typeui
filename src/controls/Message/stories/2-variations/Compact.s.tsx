import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Message, Icon } from '../../../';

storiesOf('Message/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`compact\` message takes up only as much space as its content requires.
    `
  })
  .addWithJSX(
    'Compact',
  () => (
  <div>
    <Message compact>
      <Message.Header>Changes in Service</Message.Header>
      <p>
        We updated our privacy policy.
      </p>
    </Message>
    <Message compact icon>
      <Icon name="circle" size="big" loading/>
      <Message.Content>
        <Message.Header>Changes in Service</Message.Header>
        <p>
          We updated our privacy policy.
        </p>
      </Message.Content>
    </Message>
  </div>
  ));  
