import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Textarea } from '../../Textarea'

storiesOf('Controls/Textarea', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All textarea properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Textarea 
    name="name"
    placeholder={text('placeholder', 'Write some text')}
    disabled={boolean('disabled', false)}
    error={boolean('error', false)}
    transparent={boolean('transparent', false)}
    fluid={boolean('fluid', false)}/>
  ));  

