import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean, number } from '@storybook/addon-knobs/react';
import { Icon } from '../../';
import { Size, Float } from '../../Types';
import { IconType } from '../IconType';

storiesOf('Controls/Icon', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All icon properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Icon      
    name={text('name', 'code') as IconType}
    disabled={boolean('disabled', false)}
    size={(text('size', '') as Size)}
    float={(text('float', '') as Float)}
    flipped={boolean('flipped', false)}
    mirrored={boolean('mirrored', false)}
    rotated={number('rotated', 0)}
    color={text('color', '')}
    circular={boolean('circular', false)}
    bordered={boolean('bordered', false)}
    cornered={boolean('cornered', false)}
    loading={boolean('loading', false)}
    inverted={boolean('inverted', false)}/>
  ));  
