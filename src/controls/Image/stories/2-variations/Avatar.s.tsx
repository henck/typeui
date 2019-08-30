import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../';

storiesOf('Controls/Image/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An \`avatar\` image has a fixed size, is circular and appears inline with text. This implies \`inline\`.
    `
  })
  .addWithJSX(
    'Avatar',
  () => (
    <p>
      Hello
      <Image 
      avatar={boolean('avatar', true)}
      src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/square-image.png')}/>
      world!
    </p>
  ));  
