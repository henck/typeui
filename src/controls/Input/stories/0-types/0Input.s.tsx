import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Input } from '../../../';

storiesOf('Controls/Input/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard input field, with an optional \`placeholder\` value. 
    `
  })
  .addWithJSX(
    'Input',
  () => (
  <Input name="search" type="text" placeholder={text('placeholer', 'Search...', 'Input')}/>
  ));  
