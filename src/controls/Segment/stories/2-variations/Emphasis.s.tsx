import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Segment } from '../../../';
import { text } from '@storybook/addon-knobs';

storiesOf('Segment/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A Segment can be formatted to appear less noticeable using \`secondary\` or \`tertiary\`.
    `
  })
  .addWithJSX(
    'Emphasis',
  () => (
  <div>
    <Segment>
      I'm here to tell you something, and you will probably read me first.
    </Segment>
    <Segment secondary>
      I am pretty noticeable but you might check out other content before you look at me.
    </Segment>
    <Segment tertiary>
      If you notice me you must be looking very hard.
    </Segment>            
  </div>
  ));  
