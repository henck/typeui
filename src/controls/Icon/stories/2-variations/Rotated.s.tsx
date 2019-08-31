import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../';

storiesOf('Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can be \`rotated\` by degrees.
    `
  })
  .addWithJSX(
    'Rotated',
  () => (
  <div>
    <Icon padded name="bullhorn"/>
    <Icon padded name="bullhorn" rotated={90}/>
    <Icon padded name="bullhorn" rotated={180}/>
    <Icon padded name="bullhorn" rotated={270}/>         
    <Icon padded name="bullhorn" rotated={45}/>         
  </div>
  ));  
