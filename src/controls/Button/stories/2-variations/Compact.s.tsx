import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button } from '../../../';

storiesOf('Controls/Button/Variations', module)
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
      <Button compact size='mini'>Mini</Button>
      <Button compact size='tiny'>Tiny</Button>
      <Button compact size='small'>Small</Button>
      <Button compact size='medium'>Medium</Button>
      <Button compact size='large'>Large</Button>
      <Button compact size='big'>Big</Button>
      <Button compact size='huge'>Huge</Button>
      <Button compact size='massive'>Massive</Button>
    </div>
  ));  
