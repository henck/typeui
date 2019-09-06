import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { List } from '../../../List'
import { Image } from '../../../Image'
import { Button } from '../../../Button'

storiesOf('Controls/List/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    When there are multiple \`List.Content\` elements in a list item, then the first 
    element occupies maximum space, while the others shrink.
    `
  })
  .addWithJSX(
    'List.Content',
  () => (
  <List divided>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <List.Content>Joe</List.Content>
      <List.Content>
        <Button>Add</Button>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
      <List.Content>Veronika</List.Content>
      <List.Content>
        <Button>Add</Button>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>Daniel</List.Content>
      <List.Content>
        <Button>Add</Button>
      </List.Content>
    </List.Item>
  </List>                
  ));  

