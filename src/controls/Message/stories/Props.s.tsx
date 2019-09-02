import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { HorizontalAlignment } from '../../Types';
import { Message } from '../../Message'

storiesOf('Controls/Message', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Message.Content, Message.Header], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All \`Message\` properties.
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
      align={select('align', ['', 'left', 'center', 'right'], '', 'Variations') as HorizontalAlignment}>
      {text('label', "Message text")}
    </Message>
  </div>
  ));  
