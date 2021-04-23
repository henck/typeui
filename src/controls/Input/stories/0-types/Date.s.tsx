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
    An input control of type \`date\` allows date picking. Use \`nofuture\` to disallow only future dates. 
    The \`format\` attribute controls how time is formatted in the input display (defaults to \`HH:mm:ss\`).
    See https://date-fns.org/v2.21.1/docs/format for formatting.
    `
  })
  .addWithJSX(
    'Date',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        label="Date"
        name="date"
        value={null}
        control={<Input 
          type="date" 
          placeholder="Date" 
          nofuture={boolean('nofuture', false)}
          format={text('format', "dd-MM-yyyy")}
          />}
        hint="Please select a date."/>      
    </Form>
  ));  
