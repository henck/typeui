import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../';
import { Size } from '../../../Types';

storiesOf('Image/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An image can be \`disabled\`. Note that this is done using a CSS brightness \`filter\`.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
    <Image 
      size={text('size', 'medium') as Size}
      disabled={boolean('disabled', true)}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png')}/>
  ));  
