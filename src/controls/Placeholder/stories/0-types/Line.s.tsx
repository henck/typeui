import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Placeholder } from '../../../Placeholder'

storiesOf('Controls/Placeholder/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A placeholder can contain \`Placeholder.Line\` of text. A line can be made \`tall\` to appear slightly taller.

    By default, repeated lines will appear varied in length. However, it may be useful to specify an exact \`length\` 
    to make the lines match up with content more effectively. Length values are \`short\`, \`medium\`, \`long\` and \`full\`.
    `
  })
  .addWithJSX(
    'Line',
  () => (
  <Placeholder>
    <Placeholder.Line/>
    <Placeholder.Line/>
    <Placeholder.Line length="long"/>
    <Placeholder.Line length="medium"/>
  </Placeholder>
  ));  
