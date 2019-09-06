import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs/react';
import { List } from '../../../List'
import { Image } from '../../../Image'
import { Divider } from '../../../Divider'

storiesOf('Controls/List/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`horizontal\` list lines up its items horizontally.
    `
  })
  .addWithJSX(
    'Horizontal',
  () => (
  <div>
    <List horizontal={boolean('horizontal', true)} divided={boolean('divided', true)}>
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
    <Divider hidden/>
    <List horizontal={boolean('horizontal', true)} ordered={boolean('ordered', true)}>
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
  </div>
  ));  

