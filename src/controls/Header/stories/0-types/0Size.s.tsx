import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header } from '../../../';

storiesOf('Header/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Headers can have \`size="h1"\` through \`size="h6"\`. The \`size\` attribute is required.

    By default, sizes are absolute. If \`relative\` is specified, then sizes are relative to the container font size.
    `
  })
  .addWithJSX(
    'Size',
  () => (
  <div>
    <Header size="h1">Header 1</Header>
    <Header size="h2">Header 2</Header>
    <Header size="h3">Header 3</Header>
    <Header size="h4">Header 4</Header>
    <Header size="h5">Header 5</Header>
    <Header size="h6">Header 6</Header>
  </div>
  ));  
