import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { color, text, boolean } from '@storybook/addon-knobs/react';
import { Label } from '../../';
import { Direction, Size } from '../../Types';

storiesOf('Label', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Label.Group, Label.Detail], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All label properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Label     
    basic={boolean('basic', false, 'Label')}
    pointing={text('pointing', '', 'Label') as Direction}
    size={text('size', '', 'Label') as Size}
    color={color('color', '', 'Label')}
    tag={boolean('tag', false, 'Label')}
    floating={boolean('float', false, 'Label')}>
    {text('Label text', 'Label', 'Label')}
    <Label.Detail>
    {text('Detail text', 'Detail', 'Label.Detail')}
    </Label.Detail>
  </Label>
  ));  

