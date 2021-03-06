import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../Image'
import { Size } from '../../../Types';

storiesOf('Controls/Image/States', module)
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
    size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], 'medium', 'Variations') as Size}
      disabled={boolean('disabled', true, 'States')}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png', 'Types')}/>
  ));  
