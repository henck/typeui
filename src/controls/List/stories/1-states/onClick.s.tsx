import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { List, Icon } from '../../../';

storiesOf('List/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    \`List.Item\` can have the \`onClick\` attribute.

    So can \`List.Content\`, which will prevent clicks from bubbling up to parent items.
    `
  })
  .addWithJSX(
    'onClick',
  () => (
  <List divided align="center">
    <List.Item onClick={() => { alert('Item 1 clicked.');}}>
      <Icon name="code" size="large" color="teal" inverted circular/>
      <List.Content>
        <List.Header>Item 1</List.Header>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item onClick={() => { alert('Item 2 clicked.');}}>
      <Icon name="code" size="large" color="teal" inverted circular/>
      <List.Content>
        <List.Header>Item 2</List.Header>
        <List.Description>Updated 12 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item onClick={() => { alert('Item 3 clicked.');}}>
      <Icon name="code" size="large" color="teal" inverted circular/>
      <List.Content>
        <List.Header>Item 3</List.Header>
        <List.Description>Updated 45 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
  ));  

