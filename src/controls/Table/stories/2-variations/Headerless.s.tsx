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
    A \`Table\` without a \`<thead>\` adds a rounded border to the first row. Not that
    for the styling to work, a \`<tbody>\` element is required.
    `
  })
  .addWithJSX(
    'Headerless',
  () => (
  <Table striped={boolean('striped', true, 'Variations')}>
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
