import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Button } from '../../../';

storiesOf('Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`compact\` button has less padding.
    `
  })
  .addWithJSX(
    'Compact', () => (
    <div>
      <Button compact={boolean('compact', true, 'Variations')} size='mini'>Mini</Button>
      <Button compact={boolean('compact', true, 'Variations')} size='tiny'>Tiny</Button>
      <Button compact={boolean('compact', true, 'Variations')} size='small'>Small</Button>
      <Button compact={boolean('compact', true, 'Variations')} size='medium'>Medium</Button>
      <Button compact={boolean('compact', true, 'Variations')} size='large'>Large</Button>
      <Button compact={boolean('compact', true, 'Variations')} size='big'>Big</Button>
      <Button compact={boolean('compact', true, 'Variations')} size='huge'>Huge</Button>
      <Button compact={boolean('compact', true, 'Variations')} size='massive'>Massive</Button>
    </div>
  ));  
