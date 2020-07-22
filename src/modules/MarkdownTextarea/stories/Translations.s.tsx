import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { Form } from '../../../controls/Form';
import { MarkdownTextarea } from '../../../modules/MarkdownTextarea';


storiesOf('Modules/MarkdownTextarea', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The labels that appear on the \`MarkdownTextarea\` can optionally be translated.
    `
  })
  .addWithJSX(
    'Translations',
  () => (
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="description"
      value={null}
      control={
        <MarkdownTextarea rows={10} placeholder="Description" label_markdown="é suportado" label_preview="Pre-visualização" label_text="Texto"/>
      }
    />
  </Form>   
  ));  
