import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { List, Divider } from '../../../';

storiesOf('List/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A list can be \`ordered\` with numbers.
    `
  })
  .addWithJSX(
    'Ordered',
  () => (
  <List ordered>
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
  ));  

