import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { color, text } from '@storybook/addon-knobs/react';
import { Label } from '../../../Label'
import { Divider } from '../../../Divider'
import { Image } from '../../../Image'

storiesOf('Controls/Label/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A label can have a background \`color\`. The font will turn white and bold.
    `
  })
  .addWithJSX(
    'Color',
  () => (
  <div>
    <Label color="cornflowerblue">One</Label>
    <Label color="teal">Two</Label>
    <Label color="rebeccapurple"><Image src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />Three</Label>
    <Divider hidden/>
    <Label 
      color={color('color', 'steelblue')}>
      {text('Label text', 'Label')}
    </Label>
  </div>  
  ));  
