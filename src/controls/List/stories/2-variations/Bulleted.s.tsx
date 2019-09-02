import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { List } from '../../../List'
import { Divider } from '../../../Divider'

storiesOf('List/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`bulleted\` list marks items with a bullet.

    You can provide a bullet style type using \`type\` (default \`disc\`).
    `
  })
  .addWithJSX(
    'Bulleted',
  () => (
  <div>
    <List bulleted>
      <List.Item>Apples</List.Item>
      <List.Item>
        Pears
        <List bulleted>
          <List.Item>Asian pear</List.Item>
          <List.Item>European pear</List.Item>
          <List.Item>Callery pear</List.Item>
        </List>
      </List.Item>
      <List.Item>Oranges</List.Item>
    </List>
    <Divider hidden/>
    <List bulleted type="circle">
      <List.Item>Apples</List.Item>
      <List.Item>
        Pears
        <List ordered>
          <List.Item>Asian pear</List.Item>
          <List.Item>European pear</List.Item>
          <List.Item>Callery pear</List.Item>
        </List>
      </List.Item>
      <List.Item>Oranges</List.Item>
    </List>
  </div>
  ));  

