import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { number } from '@storybook/addon-knobs/react';
import { Textarea } from '../../../';

storiesOf('Controls/Textarea/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A textarea can be given a height measured in \`rows\`.

    Note that this works together with \`minHeight\`, whichever yields the greatest height.
    `
  })
  .addWithJSX(
    'Rows',
  () => (
  <div>
    <Textarea name="mytext" rows={number('rows', 8)} minHeight={number('minHeight', null)}/>
  </div>
  ));  
