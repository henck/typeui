import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean, text } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Form } from '../../../Form'

storiesOf('Controls/Input/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input control of type \`color\` allows color picking. 
    `
  })
  .addWithJSX(
    'Color',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        label="Color"
        name="color"
        value={null}
        control={<Input 
          type="color" 
          placeholder="Color" 
          disabled={boolean('disabled', false)}
          error={boolean('error', false)}          
          />}
        hint="Please select a color."/>      
    </Form>
  ));  
