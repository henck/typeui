import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Textarea } from '../../../';

storiesOf('Controls/Textarea/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A textarea can be in an \`error\` state. 
    `
  })
  .addWithJSX(
    'Error',
  () => (
  <Textarea 
    name="value"
    disabled={boolean('disabled', false)}
    error={boolean('disabled', true)}
    placeholder={text('placeholder', 'Enter value...')}/>
  ));  
