import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Placeholder } from '../../../Placeholder'

storiesOf('Placeholder/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Placeholder.Paragraph\` is used to group lines together. A margin appears between paragraphs.
    `
  })
  .addWithJSX(
    'Paragraph',
  () => (
  <Placeholder>
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
