import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { Form } from '../../../controls/Form';
import { Password } from '../../../modules/Password';


storiesOf('Modules/Password', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Password\` module combines an \`Input\` component and an \`Icon\`
    component to make a password input with an eye icon that can be clicked 
    to toggle password visibility.

    This is achieved by toggling the Input's \`type\` property between \`password\` 
    and \`text\`.
    `
  })
  .addWithJSX(
    'Password',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="password"
      value={null}
      control={
        <Password placeholder="Password"/>
      }
    />
  </Form>   
  ));  
