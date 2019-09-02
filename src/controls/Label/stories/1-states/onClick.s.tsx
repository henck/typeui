import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { color, text , boolean, select } from '@storybook/addon-knobs/react';
import { Direction } from '../../../Types';
import { Label } from '../../../Label'
import { Divider } from '../../../Divider'
import { Image } from '../../../Image'

storiesOf('Label/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A label with an \`onClick\` event darkens on hover.
    `
  })
  .addWithJSX(
    'onClick',
  () => (
  <div>
    <Label onClick={() => { alert('Clicked');}}>One</Label>
    <Label color="cornflowerblue" onClick={() => { alert('Clicked');}}>One</Label>
    <Label color="teal" onClick={() => { alert('Clicked');}}>Two</Label>
    <Label color="rebeccapurple" onClick={() => { alert('Clicked');}}><Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />Three</Label>
    <Divider hidden/>
    <Label 
      color={color('color', '')}
      basic={boolean('basic', false)}
      pointing={select('pointing', ['', 'top', 'left', 'right', 'bottom'], '') as Direction}
      onClick={() => { alert('Clicked');}}>
      {text('Label text', 'Label')}
    </Label>
  </div>    
  ));  
