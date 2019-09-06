import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase'
import { select, text, boolean } from '@storybook/addon-knobs/react'
import { DataTable } from '../../../DataTable'
import { TDir } from '../../../Types';
import { Icon } from '../../../Icon/Icon';

interface IItem {
  name: string;
  age: number;
  sport: string;
}

storiesOf('Controls/DataTable/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    When there is no data, \`DataTable\` shows a default message. This message
    can be overridden by setting the \`nodata\` property. 
    `
  })
  .addWithJSX(
    'Nodata',
  () => (
  <div style={{display: 'flex', position: 'relative', height: '400px'}}>
    <DataTable 
      nodata={"There was no data to load!"}
      data={[]} 
      >
      <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item:IItem) => item.name}</DataTable.Column>
      <DataTable.Column weight={1} label="Age" order="age" dir="asc">{(item:IItem) => item.age}</DataTable.Column>
      <DataTable.Column weight={1} label="Sport" order="sport" dir="asc">{(item:IItem) => item.sport}</DataTable.Column>
    </DataTable>
  </div>
  ));  


  