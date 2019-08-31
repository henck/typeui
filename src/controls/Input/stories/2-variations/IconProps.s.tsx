import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../../';

storiesOf('Input/Variations', module)
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
  <Input 
    name="code"
    type="text" 
    placeholder={text('placeholder', 'Code...', 'Input')}/>
  ));  
