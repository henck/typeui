import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { color, select, text, boolean } from '@storybook/addon-knobs/react';
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
    primary={boolean('primary', false, 'Variations')}
    secondary={boolean('secondary', false, 'Variations')}
    positive={boolean('positive', false, 'Variations')}
    negative={boolean('negative', false, 'Variations')}
    color={color('color', '', 'Variations')}
    compact={boolean('compact', false, 'Variations')}
    fluid={boolean('fluid', false, 'Variations')}
    icon={boolean('icon', false, 'Types')}
    basic={boolean('basic', false, 'Types')}
    disabled={boolean('disabled', false, 'States')}
    circular={boolean('circular', false, 'Variations')}
    size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], '', 'Variations') as Size}
    float={select('float', ['', 'left', 'right'], '', 'Variations') as Float}
    onClick={() => console.log('Button clicked.', 'State')}>
    {text("Label", "Button", 'Content')}
  </Button>
  ));  
