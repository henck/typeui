import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../';

storiesOf('Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can be \`flipped\`.
    `
  })
  .addWithJSX(
    'Flipped',
  () => (
  <div>
    <Icon padded name="bullhorn"/>
    <Icon padded name="bullhorn" flipped/>
  </div>
  ));  
