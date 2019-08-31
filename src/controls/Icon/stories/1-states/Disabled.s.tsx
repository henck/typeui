import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../';

storiesOf('Icon/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can show that it is \`disabled\`.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
  <Icon name="bullhorn" disabled/>
  ));  
