import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Form } from '../../../Form'

storiesOf('Controls/Input/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard input field, with an optional \`placeholder\` value. 
    `
  })
  .addWithJSX(
    'Input',
  () => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="search"
      value={null}
      control={<Input name="search" type="text" placeholder={text('placeholder', 'Search...', 'Input')}/>}
    />
  </Form>
  ));  
