import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Placeholder } from '../../../Placeholder'

storiesOf('Placeholder/Types', module)
.addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A placeholder can contain a \`Placeholder.Header\`. If the \`image\` attribute is specified, then 
    the header contains a small image block.

    Header lines should optionally have the \`tall\` attribute to appear taller than paragraph lines.
    `
  })
  .addWithJSX(
    'Header',
  () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line tall/>
      <Placeholder.Line tall/>
    </Placeholder.Header>          
  </Placeholder>
  ));  
