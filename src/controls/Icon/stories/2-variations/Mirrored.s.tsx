import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../';

storiesOf('Controls/Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can be \`mirrored\`.
    `
  })
  .addWithJSX(
    'Mirrored',
  () => (
  <div>
    <Icon name="at"/>
    <Icon name="at" mirrored/>
  </div>
  ));  
