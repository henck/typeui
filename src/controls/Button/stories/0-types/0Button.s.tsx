import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button } from '../../../';
import { text } from '@storybook/addon-knobs';

storiesOf('Controls/Button/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard button has no bold text.
    `
  })
  .addWithJSX(
    'Standard Button',
  () => (
  <div>
    <Button      
      onClick={() => console.log('Button clicked.')}>
      {text("Label", "Button")}
    </Button>
  </div>
  ));  
