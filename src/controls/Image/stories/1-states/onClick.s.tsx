import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Image } from '../../../';
import { Size } from '../../../Types';

storiesOf('Controls/Image/States', module)
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
      size={text('size', 'medium') as Size}
      onClick={() => { alert('Image clicked.');}}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png')}/>
  ));  
