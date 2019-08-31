import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Image } from '../../../';
import { Size } from '../../../Types';

storiesOf('Image/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An image can handle the \`img\` \`alt\` and \`title\` attributes.
    `
  })
  .addWithJSX(
    'Alt and Title',
  () => (
    <Image 
      size={text('size', 'medium') as Size}
      title={text('title', 'A wireframe')}
      alt={text('title', 'A wireframe')}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png')}/>
  ));  
