import * as React from 'react';
import styled from '../../../../styles/Theme';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Panel } from '../../';

storiesOf('Panel/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Panel.Icon\` component is a shortcut to building a \`Panel\` that opens when an
    \`Icon\` is clicked. Note that the \`Panel.Icon\` must still be placed inside a container
    that is relatively positioned, and that the only way to close the panel is to click
    outside it.
    `
  })
  .addWithJSX(
    'Panel.Icon',
  () => (
    <div style={{position: 'relative'}}>
      <Panel.Icon padded icon="layers">
        <p>This is some panel text.</p>
      </Panel.Icon>
    </div>
  ));  

  