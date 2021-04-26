import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Input } from '../../Input'

storiesOf('Controls/Input', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Input]}))
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
    placeholder={text('placeholder', 'Enter something', 'Input')}
    disabled={boolean('disabled', false, 'Input')}
    error={boolean('error', false, 'Input')}
    transparent={boolean('transparent', false, 'Input')}
    fluid={boolean('fluid', false, 'Input')}/>
  ));  

