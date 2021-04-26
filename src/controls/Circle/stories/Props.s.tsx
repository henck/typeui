import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s'
import { Circle } from '../Circle'
import { Icon } from '../../Icon/'

storiesOf('Controls/Circle', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Circle]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All \`Circle\` properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Circle onClick={(index: number) => console.log("Clicked: " + index)}>
    <div>One <Icon color="white" name="at"/></div>
    <div>Two <Icon color="white" name="chevron"/></div>
    <div>Three <Icon color="white" name="area-chart"/></div>
    <div>Four <Icon color="white" name="bullhorn"/></div>
    <div>Five <Icon color="white" name="edit"/></div>
  </Circle>
  ));  
