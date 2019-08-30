import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Image, Divider } from '../../../';
import { Size } from '../../../Types';

storiesOf('Controls/Image/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An image can have a different \`size\`.

    Available sizes are \`mini\`, \`tiny\`, \`small\`, \`medium\`, \`large\`, \`big\`, \`huge\` and \`massive\`.
    `
  })
  .addWithJSX(
    'Size',
  () => (
  <div>
    <Image size="mini" src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Divider hidden/>
    <Image size="tiny" src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Divider hidden/>
    <Image size="small" src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Divider hidden/>
    <Image size="medium" src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Divider hidden/>
    <Image size="large" src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Divider hidden/>
    <Image size="big" src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Divider hidden/>
    <Image size="huge" src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    <Divider hidden/>
    <Image size="massive" src="http://deelay.me/3000/https://react.semantic-ui.com/images/wireframe/image.png"/>
  </div>
  ));  
