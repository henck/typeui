import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s'
import { DataTable } from '../../../DataTable'
import { Image } from '../../../Image'

interface IItem {
  code: string;
  name: string;
}

storiesOf('Controls/DataTable/Variations', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Columns marked with \`force\` always appear, regardless the available screen space.
    `
  })
  .addWithJSX(
    'Force',
  () => (
  <div style={{display: 'flex', position: 'relative', height: '400px'}}>
    <DataTable 
      data={[
        { code: "AF", name: "Afghanistan"},
        { code: "AL", name: "Albania"},
        { code: "DZ", name: "Algeria"},
        { code: "AS", name: "American Samoa"}
      ]}>

      <DataTable.Column weight={1} label="Name" order="name" dir="asc">{(item:IItem) => item.code}</DataTable.Column>
      <DataTable.Column weight={1} label="Name" order="name" dir="asc" force>{(item:IItem) => item.name}</DataTable.Column>

    </DataTable>
  </div>
  ));  
