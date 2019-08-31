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
    A \`fluid\` input fills all horizontal space available to it.
    `
  })
  .addWithJSX(
    'Fluid',
  () => (
  <Input 
    name="search"
    type="text" 
    fluid={boolean('fluid', true, 'Input')} 
    placeholder={text('placeholder', 'Search...', 'Input')}/>
  ));  
