import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Dropdown } from '../../../Dropdown'

storiesOf('Controls/Dropdown/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The maximum number of items a Dropdown shows defaults to 6. 
    With \`maxItems\`, you can change this.
    `
  })
  .addWithJSX(
    'MaxItems',
  () => (
  <div>
    <Dropdown maxItems={8} placeholder="Select person" label={(item:any) => item.name} data={[{id: 1, name: 'John', age: 26}, {id: 2, name:'Zachary', age:28}, {id: 3, name:'Deke', age:19}, {id: 4, name:'Jake', age:20}, {id: 3, name:'Marian', age:24}, {id: 5, name:'Zachary', age:39}, {id: 6, name:'Mildred', age:52}, {id: 7, name:'Rose', age:12}, {id: 8, name:'Richard', age:16}, {id: 9, name:'Michael', age:72}]}>
      <Dropdown.Column>{(item) => <span>{item.name}</span>}</Dropdown.Column>
      <Dropdown.Column align="right">{(item) => item.age}</Dropdown.Column>
    </Dropdown>   
  </div>
  ));  
