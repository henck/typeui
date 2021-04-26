import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { text, select } from '@storybook/addon-knobs/react';
import { Size } from '../../Types';
import { Gravatar } from '../../Gravatar'

storiesOf('Controls/Gravatar', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Gravatar]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
      A Gravatar shows a generated image based on an email address, as provided
      by the gravatar service. 
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Gravatar 
    email={text('email', 'alex.vanoostenrijk@gmail.com')} 
    size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], '') as Size} />
));  
