import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { number } from '@storybook/addon-knobs/react';
import { Textarea } from '../../../';

storiesOf('Textarea/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A textarea can be given a \`mininumHeight\` measured in pixels.

    Note that this works together with \`rows\`, whichever yields the greatest height.
    `
  })
  .addWithJSX(
    'minHeight',
  () => (
  <div>
    <Textarea name="mytext" minHeight={number('minHeight', 180)} rows={number('rows', null)} />
  </div>
  ));  
