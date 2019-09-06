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
    A \`fluid\` input fills all horizontal space available to it.
    `
  })
  .addWithJSX(
    'Fluid',
  () => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="search"
      value={null}
      control={
        <Input 
            type="text" 
            fluid={boolean('fluid', true, 'Input')} 
            placeholder={text('placeholder', 'Search...', 'Input')}/>
      }
    />
  </Form>        
  ));  
