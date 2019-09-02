import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../Icon'

storiesOf('Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can be \`cornered\`. The effect can be \`inverted\`.
    `
  })
  .addWithJSX(
    'Cornered',
  () => (
  <div>
    <Icon padded name="bullhorn" cornered/>
    <Icon padded name="envelope" color="teal" cornered/>
    <Icon padded name="exchange" inverted cornered/>
    <Icon padded name="zoom-extents" color="teal" inverted cornered/>            
  </div>
  ));  
