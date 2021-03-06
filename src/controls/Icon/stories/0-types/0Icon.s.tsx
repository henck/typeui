import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Icon } from '../../../Icon'

storiesOf('Controls/Icon/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard icon. The \`name\` attribute is used to pick an icon from the built-in icons.
    `
  })
  .addWithJSX(
    'Icon',
  () => (
  <Icon name="bullhorn"/>
  ));  
