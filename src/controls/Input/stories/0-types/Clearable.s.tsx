import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Form } from '../../../Form'

storiesOf('Controls/Input/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`clearable\` input presents a clickable icon that clears the input's contents. The Input must be a controlled component for this to work.
    `
  })
  .addWithJSX(
    'Clearable',
  () => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="search"
      value={null}
      control={<Input type="text" clearable/>}
    />
  </Form>
  ));  
