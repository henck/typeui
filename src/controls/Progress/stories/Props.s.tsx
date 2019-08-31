import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Progress } from '../../';

storiesOf('Progress', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Progress], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Progress\` component shows a progress bar, filled to a percentage equal to \`value\`. The
    bar always stretches to fill all horizontal space available to it.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Progress value={50} />
  </div>
  ));  
