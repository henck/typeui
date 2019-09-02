import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { List } from '../../../List'
import { Image } from '../../../Image'

storiesOf('Controls/List/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`selection\` list shows a selection rectangle on hover. This works well with \`onClick\`. 
    
    If \`divided\`, then the selection rectangle has no corner radius.
    `
  })
  .addWithJSX(
    'Selection',
  () => (
  <List selection>
    <List.Item onClick={() => { alert('Item 1 clicked.');}}>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />    
      <List.Content>
        <List.Header>Joe Smith</List.Header>
        <List.Description>All-around cool guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item onClick={() => { alert('Item 2 clicked.');}}>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />    
      <List.Content>
        <List.Header>Veronika Ossi</List.Header>
        <List.Description>Blue in the face</List.Description>
      </List.Content>
      <List selection>
        <List.Item onClick={() => { alert('Item 2.1 clicked.');}}>
          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />    
          <List.Content>
            <List.Header>Joe Smith</List.Header>
            <List.Description>All-around cool guy</List.Description>
          </List.Content>
        </List.Item>                    
      </List>
    </List.Item>
    <List.Item onClick={() => { alert('Item 3 clicked.');}}>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />    
      <List.Content>
        <List.Header>Jenny Hess</List.Header>
        <List.Description>Matrix shades</List.Description>
      </List.Content>
    </List.Item>
  </List>
  ));  

