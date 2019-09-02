import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { color, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../Button';

storiesOf('Button/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A basic \`Button\` is less pronounced.
    `
  })
  .addWithJSX(
    'Basic Button',
  () => (
  <div>
    <Button      
      basic={boolean('basic', true, "Types")}
      color={color('color', 'orange', 'Variations')}
      onClick={action('First button clicked.')}>
      {text("Label", "Button", "Content")}
    </Button>
    <Button      
      basic={boolean('basic', true)}
      color="red"
      onClick={action('Second button clicked.')}>
      Button
    </Button>    
  </div>
  ));  
