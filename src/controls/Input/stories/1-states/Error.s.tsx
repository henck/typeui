import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Form } from '../../../Form'

storiesOf('Controls/Input/States', module)
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
