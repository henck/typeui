import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase'
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
    \`DataTable\` supports visual elements for row ordering. Calling code
    must provide the \`order\` attribute (a column name) and optionally
    the \`dir\` attribute (\`asc\` or \`desc\`) for ordering options to appear.

    The \`DataTable.Column\` elements in the DataTable must have \`order\` and
    \`dir\` properties set, as well.

    Note that \`DataTable\` is not responsible for the ordering; the calling
    code must listen for the \`onOrder\` event and provide a new \`data\` array.
    `
  })
  .addWithJSX(
    'Order',
  () => (
  <div style={{display: 'flex', position: 'relative', height: '400px'}}>
    <DataTable 
      order="name"
      dir="asc"
      onOrder={(order: string, dir?: TDir) => {}}
      data={[
        { name: "Alexander",  age: 15, sport: "Athletics"},
        { name: "Bert",   age: 21, sport: "Basketball"},
        { name: "Ellen", age: 16, sport: "Athletics"},
        { name: "Jessica", age: 19, sport: "None"},
        { name: "John",   age: 24, sport: "Soccer"},
        { name: "Joseph", age: 24, sport: "Kendo"},
        { name: "Mary",   age: 18, sport: "Polo"},
        { name: "Ralph", age: 22, sport: "Volleyball"},
        { name: "Rose",   age: 17, sport: "Soccer"},
        { name: "Rudolph", age: 29, sport: "Krav maga"}
      ]}>

      <DataTable.Column weight={2} label="Name" order="name" dir="asc">{(item:IItem) => item.name}</DataTable.Column>
      <DataTable.Column weight={1} label="Age" order="age" dir="asc">{(item:IItem) => item.age}</DataTable.Column>
      <DataTable.Column weight={1} label="Sport" order="sport" dir="asc">{(item:IItem) => item.sport}</DataTable.Column>

    </DataTable>
  </div>
  ));  


  