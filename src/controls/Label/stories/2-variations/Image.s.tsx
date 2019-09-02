import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text , boolean, select } from '@storybook/addon-knobs/react';
import { Size } from '../../../Types';
import { Label } from '../../../Label'
import { Divider } from '../../../Divider'
import { Image } from '../../../Image'

storiesOf('Controls/Label/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A label can contain an \`Image\`.
    `
  })
  .addWithJSX(
    'Image',
  () => (
  <div>
    <Label><Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>One</Label>
    <Label><Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>Two</Label>
    <Label><Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg'/>Three</Label>
    <Divider hidden/>
    <Label 
      size={select('size', ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'hude', 'massive'], '') as Size}>
      <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      {text('Label text', 'Label')}
    </Label>
  </div>  
  ));  
