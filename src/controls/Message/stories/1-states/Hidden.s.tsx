import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Message } from '../../../';

storiesOf('Message/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A message can be \`hidden\`.
    `
  })
  .addWithJSX(
    'Hidden',
  () => (
  <div>
    <Message hidden={boolean('hidden', true)}>{text('label', "Message text")}</Message>
  </div>
  ));  
