import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Icon } from '../../../Icon'

storiesOf('Controls/Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can have a simple \`loading\` animation.
    `
  })
  .addWithJSX(
    'Loading',
  () => (
  <div>
    <Icon padded name="bullhorn" loading/>
    <Icon padded name="envelope" bordered loading/>
    <Icon padded name="download" circular inverted loading/>
  </div>
  ));  
