import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Icon } from '../../../Icon'

storiesOf('Controls/Icon/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon with a custom URL. If you want to use an icon from a spritesheet other than the built-in spritesheet,
    you can pass its URL using the \`url\` attribute (and omit the \`name\` attribute).
    `
  })
  .addWithJSX(
    'url',
  () => (
  <Icon url="spritemap.svg#bullhorn"/>
  ));  
