import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Size, Float } from '../../Types';
import { Button } from '../../';

storiesOf('Controls/Button', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Button.Group, Button.Or], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All button properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Button      
    primary={boolean('primary', false)}
    secondary={boolean('secondary', false)}
    positive={boolean('positive', false)}
    negative={boolean('negative', false)}
    color={text('color', '')}
    compact={boolean('compact', false)}
    fluid={boolean('fluid', false)}
    icon={boolean('icon', false)}
    basic={boolean('basic', false)}
    disabled={boolean('disabled', false)}
    circular={boolean('circular', false)}
    size={(text('size', '') as Size)}
    float={(text('float', '') as Float)}
    onClick={() => console.log('Button clicked.')}>
    {text("Label", "Button")}
  </Button>
  ));  
