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
    A segment can \`float\` to \`left\` or \`right\`. Note that segments themselves are self-clearing (there is no \`clearing\` attribute).
    `
  })
  .addWithJSX(
    'Float',
  () => (
  <Segment>
    <p>This parent segment is self-clearing.</p>
    <Segment float="left">
      This segment will appear to the left.
    </Segment>
    <Segment float="right">
      This segment will appear to the right.
    </Segment>            
  </Segment>
  ));  
