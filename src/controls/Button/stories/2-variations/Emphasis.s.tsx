import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button } from '../../../';

storiesOf('Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can be be formatted to show different levels of emphasis: \`primary\` and \`secondary\`.
    `
  })
  .addWithJSX(
    'Emphasis', () => (
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  ));  
