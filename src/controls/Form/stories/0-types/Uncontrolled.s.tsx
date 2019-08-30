import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Form } from '../../../';
import { Input } from '../../../Input';

storiesOf('Controls/Form/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Components may wish to show a control wrapped in a field, without the
    overhead of a Form, while still benefiting from Field formatting. 

    The \`Uncontrolled\` element accepts a \`label\` and a \`hint\`, but no validation
    rules (and thus shows no errors). It also does not provide an onChange
    handler to its control; the calling code must do that.

    The field's control is also not provided as a prop, but as a child.
    `
  })
  .addWithJSX(
    'Uncontrolled',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Uncontrolled
        width={1} label="First name"
        hint={<span>Please provide the employee's first name, e.g. <kbd>John</kbd></span>}>
        <Input type="text" placeholder="First name" fluid/>
      </Form.Uncontrolled>
    </Form>
  ));  
