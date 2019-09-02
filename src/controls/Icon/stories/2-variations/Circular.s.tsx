import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Icon } from '../../../Icon'

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
    <Icon padded name="at" circular/>
    <Icon padded name="bullhorn" color="teal" circular/>
    <Icon padded name="chevron-double" inverted circular/>
    <Icon padded name="file-excel" color="teal" inverted circular/>
  </div>
  ));  
