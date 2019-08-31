import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header } from '../../../';

storiesOf('Header/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`disabled\` header shows as inactive.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
  <div>
    <Header size="h1" disabled>Disabled header</Header>
  </div>
  ));  
