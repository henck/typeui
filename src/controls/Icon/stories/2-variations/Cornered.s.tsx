import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../';

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
    <Icon name="at" cornered/>
    <Icon name="at" color="teal" cornered/>
    <Icon name="at" inverted cornered/>
    <Icon name="at" color="teal" inverted cornered/>            
  </div>
  ));  
