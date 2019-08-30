import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { color, text , boolean } from '@storybook/addon-knobs/react';
import { Label, Divider, Image } from '../../../';

storiesOf('Controls/Label/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A label can appear as a \`tag\`. Tagged labels are meant to be placed on the right side of anything they're attached to.
    `
  })
  .addWithJSX(
    'Tag',
  () => (
  <div>
    <Label tag onClick={() => { alert('Clicked');}}>One</Label>
    <Label basic tag color="cornflowerblue" onClick={() => { alert('Clicked');}}>One</Label>
    <Label tag color="rgb(0, 156, 149)" onClick={() => { alert('Clicked');}}>Two</Label>
    <Label tag color="rebeccapurple" onClick={() => { alert('Clicked');}}><Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />Three</Label>
    <Divider hidden/>
    <Label 
      color={color('color', '')}
      tag={boolean('tag', true)}
      basic={boolean('basic', true)}>
      {text('Label text', 'Label')}
    </Label>
  </div>  
  ));  
