import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { color, text, boolean } from '@storybook/addon-knobs/react';
import { Label, Divider, Image } from '../../../';

storiesOf('Controls/Label/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`basic\` label has a border and a white background. Hovering labels with \`onClick\` only affects labels with default color. 
    `
  })
  .addWithJSX(
    'Basic ',
  () => (
  <div>
    <Label basic onClick={() => { alert('Clicked');}}>One</Label>
    <Label basic color="teal" onClick={() => { alert('Clicked');}}>Two</Label>
    <Label basic color="rebeccapurple" onClick={() => { alert('Clicked');}}><Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />Three</Label>
    <Divider hidden/>
    <Label 
      color={color('color', 'steelblue')}
      basic={boolean('basic', true)}>
      {text('Label text', 'Label')}
    </Label>
  </div>  
  ));  
