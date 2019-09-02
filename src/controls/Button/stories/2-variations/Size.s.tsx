import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Button } from '../../../Button';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can have different sizes.
    `
  })
  .addWithJSX(
    'Size', () => (
    <div>
      <Button size='mini'>Mini</Button>
      <Button size='tiny'>Tiny</Button>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium (default)</Button>
      <Button size='large'>Large</Button>
      <Button size='big'>Big</Button>
      <Button size='huge'>Huge</Button>
      <Button size='massive'>Massive</Button>
    </div>
  ));  
