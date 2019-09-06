import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { Form } from '../../../Form'

storiesOf('Controls/Input/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input with an \`icon\` can take icon props.
    `
  })
  .addWithJSX(
    'Icon props',
  () => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="code"
      value={null}
      control={       
        <Input 
          type="text" 
          icon={{name: 'bullhorn', circular: true, inverted: true, color: 'grey'}}
          placeholder={text('placeholder', 'Your name', 'Input')}/>}/>
  </Form>
  ));  
