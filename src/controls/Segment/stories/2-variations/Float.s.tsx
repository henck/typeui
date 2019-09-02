import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text } from '@storybook/addon-knobs';
import { Segment } from '../../../Segment'

storiesOf('Controls/Segment/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Segment\` can \`float\` to \`left\` or \`right\`. Note that segments themselves are self-clearing (there is no \`clearing\` attribute).
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
