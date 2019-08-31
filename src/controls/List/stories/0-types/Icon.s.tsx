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
    A list with icons.
    `
  })
  .addWithJSX(
    'Icon',
  () => (
  <List>
    <List.Item>
      <Icon name="code"/>
      <List.Content>{text('Content text', 'Red Delicious is a clone of apple cultigen, now comprising more than 50 cultivars, first recognized in Madison County, Iowa, in 1880. According to the US Apple Association website, it is one of the fifteen most popular apple cultivars in the United States.')}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name="code"/>
      <List.Content>Pears</List.Content>                  
    </List.Item>
    <List.Item>
      <Icon name="code"/>
      <List.Content>Oranges</List.Content>                  
    </List.Item>
  </List>
  ));  

