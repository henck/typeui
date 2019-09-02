import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../Input'

storiesOf('Input', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All input properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Input 
    name="name"
    type="text"      
    placeholder={text('placeholder', 'Enter something')}
    disabled={boolean('disabled', false)}
    error={boolean('error', false, 'Input')}
    transparent={boolean('transparent', false)}
    fluid={boolean('fluid', false)}/>
  ));  

