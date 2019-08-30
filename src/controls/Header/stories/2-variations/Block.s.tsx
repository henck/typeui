import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header } from '../../../';

storiesOf('Controls/Header/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`block\` header appears as a content block.
    `
  })
  .addWithJSX(
    'Block',
  () => (
  <div>
    <Header size="h1" block>Block header</Header>
  </div>
  ));  
