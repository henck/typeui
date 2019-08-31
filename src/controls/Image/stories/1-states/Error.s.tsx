import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Image, Label, Icon } from '../../../';
import { Size } from '../../../Types';
import { IconType } from '../../../Icon';

storiesOf('Image/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An image that fails to load shows a grey box the same size as the image size.

    An \`Image\` can have children. These are only shown when the image fails to load. There should be one child potentially containing other children, otherwise they will overlap.
 
    The image in this demo is loaded with a delay of 1000ms (and does not exist.)
    `
  })
  .addWithJSX(
    'Error',
  () => (
    <Image 
    size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], 'medium', 'Variations') as Size}
      circular={boolean('circular', false, 'Variations')}
      src={text('src', "http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png-does-not-exist", 'Types')}>
      <Label>
        <Icon name={text('name', 'code', 'Icon') as IconType}/>
        {text('Content', 'Loading error', 'Content')}
      </Label>
    </Image>
  ));  
