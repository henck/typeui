import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Label } from '../../../Label'

storiesOf('Label/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A label can contain a \`Label.Detail\` inside it.
    `
  })
  .addWithJSX(
    'Label.Detail',
  () => (
  <Label>
    {text('Label text', 'Dogs', 'Label')}
    <Label.Detail>
    {text('Detail text', '22', 'Label.Detail')}       
    </Label.Detail>
  </Label>
  ));  
