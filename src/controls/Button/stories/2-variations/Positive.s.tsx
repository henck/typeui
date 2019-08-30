import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button } from '../../../';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button hint toward a \`positive\` or \`negative\` consequence.
    `
  })
  .addWithJSX(
    'Positive and Negative', () => (
    <div>
      <Button positive>Positive</Button>
      <Button negative>Negative</Button>
    </div>
  ));  
