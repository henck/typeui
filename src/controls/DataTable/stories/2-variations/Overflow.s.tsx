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
    Any vertical overflow is hidden.
    `
  })
  .addWithJSX(
    'Overflow',
  () => (
  <div style={{display: 'flex', position: 'relative', height: '400px'}}>
    <DataTable 
      data={[
        { code: "AF", name: "Afghanistan"},
        { code: "AL", name: "Albania"},
        { code: "DZ", name: "Algeria"},
        { code: "AS", name: "American Samoa"}
      ]}>

      <DataTable.Column weight={1} label="Name" order="name" dir="asc">{(item:IItem) => <span><Image src={`https://www.countryflags.io/${item.code}/shiny/64.png`} inline alt="Flag" size="tiny"/> {item.name}</span>}</DataTable.Column>

    </DataTable>
  </div>
  ));  
