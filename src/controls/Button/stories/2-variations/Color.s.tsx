import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button } from '../../../';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can have a different \`color\`.
    `
  })
  .addWithJSX(
    'Color', () => (
    <div>
      <Button color="orange">Orange</Button>
      <Button color="brown">Brown</Button>
    </div>
  ));  
