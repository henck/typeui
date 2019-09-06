import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Icon } from '../../../Icon'

storiesOf('Controls/Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Icons can have a different \`color\`.
    `
  })
  .addWithJSX(
    'Color',
  () => (
  <div>
    <Icon padded name="bullhorn" color='red'/>
    <Icon padded name="at" color='orange'/>
    <Icon padded name="id-card" color='yellow'/>
    <Icon padded name="chevron-double" color='olive'/>
    <Icon padded name="envelope" color='green'/>
    <Icon padded name="file-excel" color='teal'/>
    <Icon padded name="download" color='blue'/>
    <Icon padded name="edit" color='violet'/>
    <Icon padded name="code" color='purple'/>
    <Icon padded name="circle" color='pink'/>
    <Icon padded name="layers" color='brown'/>
    <Icon padded name="trash" color='grey'/>
    <Icon padded name="tools" color='black'/>
  </div>
  ));  
