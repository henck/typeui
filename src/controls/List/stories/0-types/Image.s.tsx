import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { List } from '../../../List'
import { Image } from '../../../Image'

storiesOf('Controls/List/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A list can contain images.
    `
  })
  .addWithJSX(
    'Image',
  () => (
  <List align="center">
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />    
      <List.Content>
        <List.Header>Joe Smith</List.Header>
        <List.Description>All-around cool guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />    
      <List.Content>
        <List.Header>Veronika Ossi</List.Header>
        <List.Description>Blue in the face</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />    
      <List.Content>
        <List.Header>Jenny Hess</List.Header>
        <List.Description>Matrix shades</List.Description>
      </List.Content>
    </List.Item>
  </List>
  ));  

