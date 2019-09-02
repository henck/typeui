import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../../Input'
import { IconType } from '../../../Icon';

storiesOf('Input/Variations', module)
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
  <Input 
    name="code"
    type="text" 
    placeholder={text('placeholder', 'Code...', 'Input')}/>
  ));  
