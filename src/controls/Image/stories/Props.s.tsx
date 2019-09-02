import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../Image'
import { Float, Size, VerticalAlignment } from '../../Types';

storiesOf('Controls/Image', module)
.addDecorator(withInfo({...withInfoSettings, propTables: [Image.Group], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All image properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Image  
    src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png', 'Types')}    
    title={text('title', 'image title', 'Types')}
    alt={text('alt', 'image alt text', 'Types')}
    disabled={boolean('disabled', false, 'States')}
    hidden={boolean('hidden', false, 'States')}
    size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], '', 'Variations') as Size}
    bordered={boolean('bordered', false, 'Variations')}
    rounded={boolean('rounded', false, 'Variations')}
    circular={boolean('circular', false, 'Variations')}
    avatar={boolean('avatar', false, 'Variations')}
    inline={boolean('inline', false, 'Variations')}
    spaced={select('spaced', ['', 'left', 'right', 'true'], '', 'Variations') as (Float|boolean)}
    float={select('float', ['', 'left', 'right'], '', 'Variations') as Float}
    align={select('align', ['', 'top', 'center', 'bottom'], '', 'Variations') as VerticalAlignment}>
    {text('error', 'Error text')}
  </Image>
  ));  
