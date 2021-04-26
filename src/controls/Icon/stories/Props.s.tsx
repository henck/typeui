import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { color, select, text, boolean, number } from '@storybook/addon-knobs/react';
import { Icon } from '../../Icon'
import { Size, Float } from '../../Types';
import { IconType } from '../IconType';

storiesOf('Controls/Icon', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Icon]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All \`Icon\` properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Icon      
    name={text('name', 'bullhorn', 'Types') as IconType}
    disabled={boolean('disabled', false, 'States')}
    size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], '', 'Variations') as Size}
    float={select('float', ['', 'left', 'right'], '', 'Variations') as Float}
    flipped={boolean('flipped', false, 'Variations')}
    mirrored={boolean('mirrored', false, 'Variations')}
    rotated={number('rotated', 0)}
    color={color('color', '', 'Variations')}
    circular={boolean('circular', false, 'Variations')}
    bordered={boolean('bordered', false, 'Variations')}
    cornered={boolean('cornered', false, 'Variations')}
    loading={boolean('loading', false, 'Variations')}
    inverted={boolean('inverted', false, 'Variations')}/>
  ));  
