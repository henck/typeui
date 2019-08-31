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
    An image can be \`bordered\` to emphasize the edges of white or transparent content.
    `
  })
  .addWithJSX(
    'Bordered',
  () => (
    <Image 
      size={text('size', 'medium') as Size}
      bordered={boolean('bordered', true)}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/white-image.png')}/>
  ));  
