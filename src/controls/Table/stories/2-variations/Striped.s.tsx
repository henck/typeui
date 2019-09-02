import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Table } from '../../../Table';

storiesOf('Controls/Table/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`striped\` \`Table\` adds row striping.
    `
  })
  .addWithJSX(
    'Striped',
  () => (
  <Table striped={boolean('striped', true, 'Variations')}>
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
  ));  
