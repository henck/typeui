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
    An input can be in an \`error\` state.
    `
  })
  .addWithJSX(
    'Error',
  () => (
  <Input 
    name="value"
    type="text" 
    disabled={boolean('disabled', false, 'Input')}
    error={boolean('error', true, 'Input')}
    placeholder={text('placeholder', 'Enter value...', 'Input')}/>
  ));  
