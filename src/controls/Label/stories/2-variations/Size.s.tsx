import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text , select } from '@storybook/addon-knobs/react';
import { Size } from '../../../Types';
import { Label } from '../../../Label'
import { Divider } from '../../../Divider'
import { Image } from '../../../Image'
import { Icon } from '../../../Icon'

storiesOf('Controls/Label/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A label can have a \`size\`.
    `
  })
  .addWithJSX(
    'Size',
  () => (
  <div>
    <Label size='mini'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Mini</Label>
    <Label size='tiny'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Tiny</Label>
    <Label size='small'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Small</Label>
    <Label size='medium'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Medium</Label>
    <Label size='large'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Large</Label>
    <Label size='big'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Big</Label>
    <Label size='huge'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Huge</Label>
    <Label size='massive'><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />Massive <Icon name="code"/></Label>            
    <Divider hidden/>
    <Label size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'hude', 'massive'], '') as Size}><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />{text('Label text', 'Label')}</Label>
  </div>  
  ));  
