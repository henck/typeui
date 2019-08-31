import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header } from '../../../';

storiesOf('Header/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Header text content can have \`align\` of \`left\`, \`center\` or \`right\`.
    `
  })
  .addWithJSX(
    'Align',
  () => (
  <div>
    <Header size="h1" align="left">Left header</Header>
    <Header size="h1" align="center">Center header</Header>
    <Header size="h1" align="right">Right header</Header>
  </div>
  ));  
