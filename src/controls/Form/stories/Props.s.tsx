import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Form } from '../../Form';

storiesOf('Form', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Form.Field, Form.Uncontrolled], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The Form element must be used to wrap all forms. All controls inside a form
    must be wrapped in \`Form.Field\` elements.

    The data that must be shown in the form is provided through the \`data\` prop, which
    should be an object. 

    Form uses Context to set onChange and onValidate handlers on all Field elements inside
    the form, whatever their nesting depth. When form data is changed, onChange is fired
    with the new form content. 

    The Field element keeps its own state so that updates to the form are reflected without
    changing the form's \`data\` prop. This way, should a caller of Form choose to, they may
    update the form data only when required (such as when setting the dirty flag), which
    avoid rerendering all form elements on every interaction.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
  </Form>
));  
