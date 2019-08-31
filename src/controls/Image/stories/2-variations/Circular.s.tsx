import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../';
import { Size } from '../../../Types';

storiesOf('Image/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An image may appear \`circular\`.

    This only works for square images. Rectangular images will appear elliptical.
    `
  })
  .addWithJSX(
    'Circular',
  () => (
    <Image 
      size={text('size', 'medium') as Size}
      circular={boolean('circular', true)}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/square-image.png')}/>
  ));  
