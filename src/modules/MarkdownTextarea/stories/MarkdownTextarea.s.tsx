import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { Form } from '../../../controls/Form';
import { MarkdownTextarea } from '../../../modules/MarkdownTextarea';
import { number } from '@storybook/addon-knobs';


storiesOf('Modules/MarkdownTextarea', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`MarkdownTextarea\` module combines a \`TextArea\` component with a
    \`Markdown\` formatter to add markdown preview.
    `
  })
  .addWithJSX(
    'MarkdownTextarea',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="description"
      value={null}
      control={
        <MarkdownTextarea rows={number('rows', 15)} placeholder="Description"/>
      }
    />
  </Form>   
  ));  
