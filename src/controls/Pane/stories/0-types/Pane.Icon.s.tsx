import * as React from 'react';
import styled from '../../../../styles/Theme';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Pane } from '../../../Pane';

storiesOf('Controls/Pane/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [ Pane.Icon ]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Pane.Icon\` is a shortcut for a \`Pane\` that opens when an \`Icon\` is clicked. It is
    self-closing.
    `
  })
  .addWithJSX(
    'Pane.Icon',
  () => (
  <div style={{position: 'relative', display: 'inline-block'}}>
    <Pane.Icon icon="layers" padded>
      <p>This is some pane text.</p>
    </Pane.Icon>      
  </div>
  ));  

  