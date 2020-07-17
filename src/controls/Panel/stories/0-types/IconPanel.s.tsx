import * as React from 'react';
import styled from '../../../../styles/Theme';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Panel } from '../../../Panel';

storiesOf('Controls/Panel/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Panel.Icon\` component is a shortcut to building a \`Panel\` that opens when an
    \`Icon\` is clicked. Note that the \`Panel.Icon\` must still be placed inside a container
    that is relatively positioned, and that the only way to close the panel is to click
    outside it.

    An icon can be passed as an icon type, or as a collection of icon properties.
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

  