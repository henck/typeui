import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Form } from '../../../Form';
import { Input } from '../../../Input';

storiesOf('Controls/Form/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Form.Field], propTablesExclude: [Form]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Form.Field\` wraps a form control. It serves several purposes.

    First, the Field automatically adds \`name\`, \`onChange\`, \`value\` and \`error\`
    props to the control it contains. The \`onChange\` prop is supplied by the Form
    content so that the developer does not need to add it.

    Second, the Field performs validation when it is mounted, whenever its control's value 
    changes, and when it is unmounted. Validation results are send directly to the parent
    Form (using Context, again).

    A Field may provide a \`hint\` prop - which can be any JSX - which is shown under the
    control.

    A Field may add any number of validation rules, e.g. \`required={{message:"This field is required"}}\`.
    Each rule is a prop. Rules include \`rquired\`, \`isInt\`, \`minLength\` etc.

    When a field is first mounted, it is pristine. Even when its content is invalid, it will
    not show any validation error. When the user edits the fields, it will no longer be 
    pristine and any errors will appear. The parent Form also provides a \`dirty\` prop to the
    Field. When the Form is dirty, so are its fields, and any validation errors are shown, pristine or not.

    For dark background, fields may set their \`contrast\` prop to true to use lighter error colors.
    `
  })
  .addWithJSX(
    'Field',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        required={{message: "Employee first name is required."}}
        width={1} label="First name"
        name="employee_firstname" 
        value={"test"}
        control={(<Input type="text" placeholder="First name" fluid/>)}
        hint={<span>Please provide the employee's first name, e.g. <kbd>John</kbd></span>}/>
    </Form>
  ));  
