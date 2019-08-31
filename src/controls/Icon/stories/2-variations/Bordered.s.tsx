import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../';

storiesOf('Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can be \`bordered\`. The effect can be \`inverted\`.
    `
  })
  .addWithJSX(
    'Bordered',
  () => (
  <div>
    <Icon name="at" bordered/>
    <Icon name="at" color="teal" bordered/>
    <Icon name="at" inverted bordered/>
    <Icon name="at" color="teal" inverted bordered/>     
  </div>
  ));  
