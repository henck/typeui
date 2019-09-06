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

storiesOf('Controls/DataTable/Variations', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`DataTable\` can remember its current scroll position, and restore it when the user
    navigates away and returns. when the table scrolls, the current scroll position is 
    returned through the \`onScroll\` event. Calling code can then return the scroll position
    using \`scrollTop\`.
    `
  })
  .addWithJSX(
    'Scroll Position',
  () => (
  <div style={{display: 'flex', position: 'relative', height: '400px'}}>
    <DataTable 
      scrollTop={0}
      onScroll={(scrollTop: number) => {}}     
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


  