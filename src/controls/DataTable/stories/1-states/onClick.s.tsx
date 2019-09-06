import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase'
import { select, text, boolean } from '@storybook/addon-knobs/react'
import { DataTable } from '../../../DataTable'
import { TDir } from '../../../Types';
import { action } from '@storybook/addon-actions';

interface IItem {
  name: string;
  age: number;
  sport: string;
}

storiesOf('Controls/DataTable/States', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`DataTable\` takes an \`onClick\` event handler. When a row is clicked,
    the onClick event is is fired with the row's data item. Clickable rows also
    give visual feedback.
    `
  })
  .addWithJSX(
    'onClick',
  () => (
  <div style={{display: 'flex', position: 'relative', height: '400px'}}>
    <DataTable 
      onClick={action('Item clicked.')}
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


  