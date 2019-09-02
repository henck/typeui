import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, color, text, boolean } from '@storybook/addon-knobs/react';
import { Direction } from '../../../Types';
import { Label } from '../../../Label'
import { Divider } from '../../../Divider'
import { Input } from '../../../Input'

storiesOf('Label/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A label can be \`pointing\` to \`top\`, \`bottom\`, \`left\` or \`right\`.
    `
  })
  .addWithJSX(
    'Pointing',
  () => (
<div>
  <Input name="firstname" type="text" placeholder="First name" fluid/>
  <Label pointing="top">Please enter a value</Label>
  <Divider hidden/>
  <Label pointing="bottom">Please enter a value</Label>
  <Input name="lastname" type="text" placeholder="Last name" fluid/>
  <Divider hidden/>
  <Input name="username" type="text" placeholder="Username"/>
  <Label pointing>That name is taken!</Label>
  <Divider hidden/>
  <Label pointing="right">Your password must be 6 characters or more</Label>
  <Input name="password" type="password" placeholder="Password"/>
  <Divider section hidden/>
  <Input name="myinput" type="text" placeholder="My input"/>
  <Label 
    color={color('color', 'steelblue')}
    basic={boolean('basic', false)}
    pointing={select('pointing', ['', 'top', 'left', 'right', 'bottom'], 'left') as Direction}>
    {text('Label text', 'Label')}
  </Label>
  </div>  
  ));  
