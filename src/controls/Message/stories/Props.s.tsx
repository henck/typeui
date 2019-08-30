import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Message } from '../../';
import { HorizontalAlignment } from '../../Types';

storiesOf('Controls/Message', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All message properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Message      
      hidden={boolean('hidden', false)}
      compact={boolean('compact', false)}
      type={text('tpye', '') as any}
      color={text('color', '')}
      raised={boolean('raised', false)}
      align={text('align', '') as HorizontalAlignment}>
      {text('label', "Message text")}
    </Message>
  </div>
  ));  
