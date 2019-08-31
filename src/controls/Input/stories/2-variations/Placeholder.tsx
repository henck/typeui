import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Input } from '../../../';

storiesOf('Input/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input can have a \`placeholder\` text value.
    `
  })
  .addWithJSX(
    'Placeholder',
  () => (
  <Input name="search" type="text" placeholder={text('placeholder', 'Search...', 'Input')}/>
  ));  
