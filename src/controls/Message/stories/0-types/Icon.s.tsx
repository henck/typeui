import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Size } from '../../../Types';
import { Message } from '../../../Message'
import { Icon, IconType } from '../../../Icon'

storiesOf('Controls/Message/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A message can contain an \`Icon\`. Adding the \`icon\` attribute will apply appropriate layout to the message.
    `
  })
  .addWithJSX(
    'Icon',
  () => (
  <div>
    <Message icon>
      <Icon name={text('name', "circle-notch") as IconType} size={text('size', "big") as Size} loading={boolean('loading', true)}/>
      <Message.Content>
        <Message.Header>{text('header', "Just one second")}</Message.Header>
        <p>
          {text('text', "We are fetching content for you.")}
        </p>
      </Message.Content>
    </Message>
  </div>
  ));  
