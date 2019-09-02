import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { number, text, boolean } from '@storybook/addon-knobs/react';
import { Filesize } from '../Filesize'

storiesOf('Formatters/Filesize', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Filesize], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Filesize takes a size prop (in bytes) and renders
    a human-readable filesize string.
     
    E.g. \`10000\` yields \`10.0 kB\`
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Filesize value={number('value', 50000)} />
  </div>
  ));  
