import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Placeholder } from '../../../';

storiesOf('Placeholder/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`fluid\` placeholder fills the width of its container.
    `
  })
  .addWithJSX(
    'Fluid',
  () => (
  <Placeholder fluid>
    <Placeholder.Header image>
      <Placeholder.Line tall/>
      <Placeholder.Line tall/>
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line/>
      <Placeholder.Line/>
      <Placeholder.Line/>
      <Placeholder.Line/>
    </Placeholder.Paragraph>
    <Placeholder.Paragraph>
      <Placeholder.Line/>
      <Placeholder.Line/>
      <Placeholder.Line/>
      <Placeholder.Line/>
    </Placeholder.Paragraph>                
  </Placeholder>
  ));  
