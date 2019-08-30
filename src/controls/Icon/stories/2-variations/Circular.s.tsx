import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../';

storiesOf('Controls/Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can be \`circular\`. The effect can be \`inverted\`.
    `
  })
  .addWithJSX(
    'Circular',
  () => (
  <div>
    <Icon name="at" circular/>
    <Icon name="at" color="teal" circular/>
    <Icon name="at" inverted circular/>
    <Icon name="at" color="teal" inverted circular/>
  </div>
  ));  
