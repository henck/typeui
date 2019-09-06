import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../Image'
import { Size } from '../../../Types';

storiesOf('Controls/Image/Variations', module)
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
      size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], 'medium', 'Variations') as Size}
      bordered={boolean('bordered', true, 'Variations')}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/white-image.png', 'Types')}/>
  ));  
