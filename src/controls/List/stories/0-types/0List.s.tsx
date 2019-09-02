import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { List } from '../../../List'

storiesOf('List/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard List has no bullets, icons or images. Its items are \`List.Item\` elements.
    `
  })
  .addWithJSX(
    'List',
  () => (
  <List>
    <List.Item>{text('Item text', 'Red Delicious is a clone of apple cultigen, now comprising more than 50 cultivars, first recognized in Madison County, Iowa, in 1880. According to the US Apple Association website, it is one of the fifteen most popular apple cultivars in the United States.')}</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Oranges</List.Item>
  </List>
  ));  

