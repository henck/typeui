import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Input } from '../../../';

storiesOf('Input/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`clearable\` input presents a clickable icon that clears the input's contents.
    `
  })
  .addWithJSX(
    'Clearable',
  () => (
  <div>
    <Input type="text" value="test" clearable/>
  </div>
  ));  
