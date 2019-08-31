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
    A \`compact\` segment only takes up as much space as necessary.
    `
  })
  .addWithJSX(
    'Compact',
  () => (
  <div>
    <Segment compact>
      A few words.
    </Segment>
    <Segment compact>
      Enough said.
    </Segment>
  </div>
  ));  
