import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { color, boolean } from '@storybook/addon-knobs/react';
import { Label } from '../../../Label'
import { Segment } from '../../../Segment'

storiesOf('Label/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A label can appear \`floating\` above another component.
    `
  })
  .addWithJSX(
    'Floating',
  () => (
  <Segment compact>
    <Label floating={boolean('floating', true)} basic={boolean('basic', false)} color={color('color', 'rgb(0, 156, 149)')} onClick={() => { alert('Clicked');}}>22</Label>
    Some segment content.
  </Segment>
  ));  
