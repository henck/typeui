import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Icon } from '../../../';

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
    <Icon name="at" loading/>
    <Icon name="at" bordered loading/>
    <Icon name="at" circular inverted loading/>
  </div>
  ));  
