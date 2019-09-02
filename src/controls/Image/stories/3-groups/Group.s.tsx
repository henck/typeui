import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../Image'
import { Size } from '../../../Types';

storiesOf('Controls/Image/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An \`Image.Group\` is a group of images can share \`size\`, \`bordered\`, \`rounded\` and \`circular\` attributes. The images are automatically spaced.
    `
  })
  .addWithJSX(
    'Group',
  () => (
  <Image.Group 
    size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], 'medium', 'Group') as Size}
    bordered={boolean('bordered', false, 'Group')}
    rounded={boolean('rounded', true, 'Group')}
    circular={boolean('circular', false, 'Group')}>
    <Image src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Image src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Image src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Image src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/>
  </Image.Group>
  ));  
