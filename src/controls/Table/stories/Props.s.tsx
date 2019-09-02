import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { select, boolean } from '@storybook/addon-knobs/react';
import { Table } from '../../Table';

storiesOf('Table', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Table\` adds some standard styling to Table elements. Ordinary \`th\` 
    and \`td\` elements are used inside.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Table>
      <thead>
        <tr>
          <th>Column One</th>
          <th>Column Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Value One</td>
          <td>Value Two</td>
        </tr>
        <tr>
          <td>Value Three</td>
          <td>Value Four</td>
        </tr>
        <tr>
          <td>Value Five</td>
          <td>Value Six</td>
        </tr>
      </tbody>
    </Table>
  </div>
  ));  
