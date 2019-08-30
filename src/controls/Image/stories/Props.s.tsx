import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../';
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
    src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png')}    
    title={text('title', 'image title')}
    alt={text('alt', 'image alt text')}
    disabled={boolean('disabled', false)}
    hidden={boolean('hidden', false)}
    size={text('size', '') as Size}
    bordered={boolean('bordered', false)}
    rounded={boolean('rounded', false)}
    circular={boolean('circular', false)}
    avatar={boolean('avatar', false)}
    inline={boolean('inline', false)}
    spaced={boolean('spaced', false)}
    float={text('float', '') as Float}
    align={text('align', '') as VerticalAlignment}>
    {text('error', 'Error text')}
  </Image>
  ));  
