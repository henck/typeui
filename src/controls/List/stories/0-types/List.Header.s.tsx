import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { List, Icon } from '../../../';

storiesOf('List/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A list with \`List.Header\` and \`List.Description\`.

    Note the use of the \`align\` property to align icons vertically.
    `
  })
  .addWithJSX(
    'List.Header',
  () => (
  <List divided align="top">
    <List.Item>
      <Icon name="code" size="large" color="teal" inverted circular/>
      <List.Content>
        <List.Header><a href="http://www.google.com">Link 1</a></List.Header>
        <List.Description>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="code" size="large" color="teal" inverted circular/>
      <List.Content>
        <List.Header><a href="http://www.google.com">Link 2</a></List.Header>
        <List.Description>Updated 18 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Icon name="code" size="large" color="teal" inverted circular/>
      <List.Content>
        <List.Header><a href="http://www.google.com">Link 3</a></List.Header>
        <List.Description>Updated 25 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
  ));  

