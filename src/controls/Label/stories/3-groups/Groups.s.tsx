import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Label } from '../../../Label'
import { Divider } from '../../../Divider'

storiesOf('Controls/Label/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Label.Group\` can pass props to the labels it contains, but children can still override them. 
    
    Groups can pass along \`basic\`, \`color\`, \`pointing\`, \`size\` and \`tag\`.
    `
  })
  .addWithJSX(
    'Group',
  () => (
  <div>
    <Label.Group tag>
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
    </Label.Group>
    <Divider hidden/>
    <Label.Group basic>
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
    </Label.Group>
    <Divider hidden/>
    <Label.Group size='large'>
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
    </Label.Group>
    <Divider hidden/>
    <Label.Group color='cornflowerblue'>
      <Label>Group color</Label>
      <Label color="green">Overridden color</Label>
      <Label>Group color</Label>
    </Label.Group>
    <Divider hidden/>
    <Label.Group pointing="top" color='LightCoral'>
      <Label>One</Label>
      <Label>Two</Label>
      <Label>Three</Label>
    </Label.Group>
  </div>                  
  ));  
