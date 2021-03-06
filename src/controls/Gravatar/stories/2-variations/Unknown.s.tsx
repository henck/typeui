import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean, text, select } from '@storybook/addon-knobs/react';
import { Size } from '../../../Types';
import { Gravatar } from '../../../Gravatar'

storiesOf('Controls/Gravatar/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    If an \`email\` is not provided, then the Gravatar will request the default "unknown user" 
    image from the gravatar service.
    `
  })
  .addWithJSX(
    'Unknown',
  () => (
    <Gravatar 
      email={text('email', '')}
      size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], '') as Size} 
      />
  ));  
