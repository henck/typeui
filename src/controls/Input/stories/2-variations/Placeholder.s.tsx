import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Form } from '../../../Form'

storiesOf('Controls/Input/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input can have a \`placeholder\` text value.
    `
  })
  .addWithJSX(
    'Placeholder',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="search"
      value={null}
      control={           
       <Input type="text" placeholder={text('placeholder', 'Search...', 'Input')}/>}/>
    </Form>
  ));  
