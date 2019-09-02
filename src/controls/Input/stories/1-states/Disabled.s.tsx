import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'

storiesOf('Input/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input can be \`disabled\`.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
  <Input 
    name="value"
    type="text" 
    disabled={boolean('disabled', true, 'Input')}
    error={boolean('error', false, 'Input')}
    placeholder={text('placeholder', 'Enter value...', 'Input')}/>
  ));  
