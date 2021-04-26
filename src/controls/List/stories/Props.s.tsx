import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { List } from '../../List';
import { VerticalAlignment, ListStyleType } from '../../Types';

storiesOf('Controls/List', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [List, List.Content, List.Description, List.Header, List.Item]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All list properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <List      
    bulleted={boolean('bulleted', false, 'List')}
    ordered={boolean('ordered', false, 'List')}
    selection={boolean('selection', false, 'List')}
    divided={boolean('divided', false, 'List')}
    relaxed={boolean('relaxed', false, 'List')}
    horizontal={boolean('horizontal', false, 'List')}
    animated={boolean('animated', false, 'List')}
    align={select('align', ['', 'top', 'center', 'bottom'], '', 'List') as VerticalAlignment}
    type={select('type', ['', 'disc',  'circle',  'square',  'decimal',  'decimal-leading-zero',  'lower-roman'
   ,  'upper-roman',  'lower-greek',  'upper-greek',  'lower-latin',  'upper-latin'
   ,  'armenian',  'georgian',  'lower-alpha',  'upper-alpha'], '', 'List') as ListStyleType}>
    <List.Item>
      <List.Content>
        <List.Header>{text('Header text', 'Joe Smith', 'List.Header')}</List.Header>
        <List.Description>{text('Description text', 'All-around cool guy', 'List.Description')}</List.Description>
      </List.Content>      
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Wayne Scott</List.Header>
        <List.Description>Graphics Artist</List.Description>
      </List.Content>      
    </List.Item>    
    <List.Item>
      <List.Content>
        <List.Header>Terry Spencer</List.Header>
        <List.Description>Developer</List.Description>
      </List.Content>      
    </List.Item>    
  </List>
  ));  

