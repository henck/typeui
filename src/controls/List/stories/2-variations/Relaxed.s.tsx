import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { List } from '../../../List'
import { Image } from '../../../Image'
import { Divider } from '../../../Divider'

storiesOf('Controls/List/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`relaxed\` list adds more negative space around its items. Optionally \`relaxed="very"\`.
    `
  })
  .addWithJSX(
    'Relaxed',
  () => (
  <div>
    <List relaxed>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />    
        <List.Content>
          <List.Header>Elliot Jones</List.Header>
          <List.Description>Totally rocks a moustache</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />    
        <List.Content>
          <List.Header>Stevie Bones</List.Header>
          <List.Description>Just mist the audition</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />    
        <List.Content>
          <List.Header>Daniel Rhoads</List.Header>
          <List.Description>The D-man</List.Description>
        </List.Content>
      </List.Item>
    </List>
    <Divider hidden/>
    <List relaxed="very">
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />    
        <List.Content>
          <List.Header>Elliot Jones</List.Header>
          <List.Description>Totally rocks a moustache</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />    
        <List.Content>
          <List.Header>Stevie Bones</List.Header>
          <List.Description>Just mist the audition</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />    
        <List.Content>
          <List.Header>Daniel Rhoads</List.Header>
          <List.Description>The D-man</List.Description>
        </List.Content>
      </List.Item>
    </List>                
  </div>
  ));  

