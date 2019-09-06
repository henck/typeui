import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Icon } from '../../../Icon'

storiesOf('Controls/Icon/Variations', module)
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
    <Icon padded name="bullhorn" bordered/>
    <Icon padded name="id-card" color="teal" bordered/>
    <Icon padded name="lock" inverted bordered/>
    <Icon padded name="plus" color="teal" inverted bordered/>     
  </div>
  ));  
