import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { boolean, text, select } from '@storybook/addon-knobs/react';
import { Gravatar } from '../../';
import { Size } from '../../Types';

storiesOf('Controls/Gravatar', module)
  .addDecorator(withInfo({...withInfoSettings, propTablesExclude: []}))
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
