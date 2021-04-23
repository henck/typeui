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
    An input control of type \`time\` can show time in 12 or 24 hours, and optionally add a clock face.
    Hours and minutes are always shown, but seconds are optional. 
    The \`format\` attribute controls how time is formatted in the input display (defaults to \`HH:mm:ss\`).
    See https://date-fns.org/v2.21.1/docs/format for formatting.
    `
  })
  .addWithJSX(
    'Time',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        label="Time"
        name="time"
        value={null}
        control={<Input 
          type="time" 
          placeholder="Time" 
          clock={boolean('clock', true)} 
          hasSeconds={boolean('hasSeconds', true)}
          is24h={boolean('is24h', true)}
          format={text('format', "HH:mm:ss")}
          />}
        hint="Please select a time."/>      
    </Form>
  ));  
