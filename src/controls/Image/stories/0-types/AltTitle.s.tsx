import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { select, text } from '@storybook/addon-knobs/react';
import { Image } from '../../../Image'
import { Size } from '../../../Types';

storiesOf('Controls/Image/Types', module)
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
      size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], 'medium', 'Variations') as Size}
      title={text('title', 'A wireframe', 'Types')}
      alt={text('title', 'A wireframe', 'Types')}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png', 'Types')}/>
  ));  
