import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Button } from '../../../';

storiesOf('Button/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A basic button is less pronounced.
    `
  })
  .addWithJSX(
    'Basic Button',
  () => (
  <div>
    <Button      
      basic={boolean('basic', true)}
      color={text('color', '')}
      onClick={() => alert('Button clicked.')}>
      Button
    </Button>
    <Button      
      basic={boolean('basic', true)}
      color="red"
      onClick={() => alert('Button clicked.')}>
      Button
    </Button>    
  </div>
  ));  
