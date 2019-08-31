import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, text } from '@storybook/addon-knobs/react';
import { Image } from '../../../';
import { Size } from '../../../Types';
import { action } from '@storybook/addon-actions';

storiesOf('Image/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An image can have an \`onClick\` event.

    Clickable images get a "hand" cursor.
    `
  })
  .addWithJSX(
    'onClick',
  () => (
    <Image 
      size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], 'medium', 'Variations') as Size}
      onClick={() => { action('Image clicked.');}}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png', 'Types')}/>
  ));  
