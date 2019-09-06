import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s'
import { select, text, boolean } from '@storybook/addon-knobs/react'
import { DataTable } from '../../../DataTable'
import { TDir } from '../../../Types';

interface IItem {
  name: string;
  age: number;
  sport: string;
}

storiesOf('Controls/DataTable/Types', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard \`DataTable\` must have a \`data\` property that contains a list
    of items to show. 
    
    ##### Dynamic tables
    While a static table contains all of its data in the \`data\` property,
    a dynamic table (which is why \`DataTable\` exists) should provide an array containing
    empty sport for data that is yet to be loaded. The \`onFetch\` property should be provided
    to fetch segments of data and place them in the array. 

    ##### Positioning
    A \`DataTable\` stretches to fill all vertical space available to it. It expects
    to be placed in a container with \`display: flex\`.
    `
  })
  .addWithJSX(
    'DataTable',
  () => (
  <div style={{display: 'flex', position: 'relative', height: '400px'}}>
    <DataTable 
      data={[
        { name: "John",   age: 24, sport: "Soccer"},
        { name: "Mary",   age: 18, sport: "Polo"},
        { name: "Bert",   age: 21, sport: "Basketball"},
        { name: "Joseph", age: 24, sport: "Kendo"},
        { name: "Rose",   age: 17, sport: "Soccer"},
        { name: "Alexander",  age: 15, sport: "Athletics"},
        { name: "Rudolph", age: 29, sport: "Krav maga"},
        { name: "Jessica", age: 19, sport: "None"},
        { name: "Ellen", age: 16, sport: "Athletics"},
        { name: "Ralph", age: 22, sport: "Volleyball"},
      ]}>

      <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item:IItem) => item.name}</DataTable.Column>
      <DataTable.Column weight={1} label="Age" order="age" dir="asc">{(item:IItem) => item.age}</DataTable.Column>
      <DataTable.Column weight={1} label="Sport" order="sport" dir="asc">{(item:IItem) => item.sport}</DataTable.Column>

    </DataTable>
  </div>
  ));  


  