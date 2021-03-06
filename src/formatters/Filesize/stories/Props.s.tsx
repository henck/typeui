import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { number, select } from '@storybook/addon-knobs/react';
import { Filesize } from '../Filesize'

storiesOf('Formatters/Filesize', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Filesize], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    \`Filesize\` takes a \`value\` prop (in bytes) and renders
    a human-readable filesize string.
     
    E.g. \`10000\` yields \`10.0 kB\`

    The unit type can optionally be specified, either \`si\` (International System of 
    Units, where 1 kilobyte is 1,000 byes), or \`binary\`, where 1 kilobyte is 1,024 bytes.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Filesize value={number('value', 50000)} unit={select('unit', ['si', 'binary'], null)} />
  </div>
  ));  
