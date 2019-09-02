import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Form } from '../../../Form'

storiesOf('Controls/Input/States', module)
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
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="search"
      value={null}
      control={<Input type="text" placeholder={text('placeholder', 'Search...', 'Input')} disabled={boolean('disabled', true, 'Input')}/>}
    />
  </Form>    
  ));  

