import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Image, Segment } from '../../../';

storiesOf('Image/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An image can specify its vertical alignment using \`align\` (either \`top\`, \`center\` or \`bottom\`).
    `
  })
  .addWithJSX(
    'Align',
  () => (
  <div>
    <p>Aligned <Image inline size='mini' align='top' src="http://deelay.me/1000/https://react.semantic-ui.com/images/avatar/small/joe.jpg"/> to top.</p>
    <p>Aligned <Image inline size='mini' align='center' src="http://deelay.me/1000/https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/> to center.</p>
    <p>Aligned <Image inline size='mini' align='bottom' src="http://deelay.me/1000/https://react.semantic-ui.com/images/avatar/small/stevie.jpg"/> to bottom.</p>
  </div>
  ));  
