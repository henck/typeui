import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Float } from '../../../Types';
import { Input } from '../../../Input'
import { IconType } from '../../../Icon';
import { Form } from '../../../Form';

storiesOf('Controls/Input/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input's \`Icon\` can be placed \`left\` or \`right\`.
    `
  })
  .addWithJSX(
    'Icon position',
  () => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field
      name="code"
      value={null}
      control={    
        <Input 
          type="text" 
          icon={text('icon', 'bullhorn', 'Variations') as IconType}
          iconPosition={select('iconPosition', ['', 'left', 'right'], 'right', 'Variations') as Float}
          placeholder={text('placeholder', 'Code...', 'Input')}/>}/>
  </Form>
  ));  
