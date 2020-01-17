import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs';
import { Dropdown } from '../../../Dropdown'

storiesOf('Controls/Dropdown/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    If an \`onSearch\` callback is provided, then the \`Dropdown\` will have a search box. When the user
    types in the search box, the callback is called with the search string. There is a debounce or 350ms
    in place so the search callback is not called too often. This gives your code an opportunity to provide
    the \`Dropdown\` with new items based on the search string.
    `
  })
  .addWithJSX(
    'Search',
  () => (
  <div>
    <Dropdown placeholder="Select person" onSearch={(q:string) => {}} label={(item:any) => item.name} data={[{id: 1, name: 'John', age: 26}, {id: 2, name:'Zachary', age:28}, {id: 3, name:'Deke', age:19}, {id: 4, name:'Jake', age:20}, {id: 3, name:'Marian', age:24}, {id: 5, name:'Zachary', age:39}, {id: 6, name:'Mildred', age:52}, {id: 7, name:'Rose', age:12}, {id: 8, name:'Richard', age:16}, {id: 9, name:'Michael', age:72}]}>
      <Dropdown.Column>{(item) => <span>{item.name}</span>}</Dropdown.Column>
      <Dropdown.Column align="right">{(item) => item.age}</Dropdown.Column>
    </Dropdown>   
  </div>
  ));  
