import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Dropdown } from '../../../Dropdown';
import { Label } from '../../../Label';

storiesOf('Controls/Dropdown/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A dropdown can show multiple columns. Each \`Dropdown.Column\` must have a single child
    that is a formatting function for an item, e.g. \`(item) => item.name\`
    `
  })
  .addWithJSX(
    'Columns',
  () => (
  <div>
    <Dropdown placeholder="Select person" label={(item:any) => item.name} data={[{id: 1, name: 'John', relation: 'friend'}, {id: 2, name:'Zachary', relation: 'uncle'}, {id: 3, name:'Deke', relation: 'friend'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
      <Dropdown.Column>{(item) => (<Label>{item.relation}</Label>)}</Dropdown.Column>
    </Dropdown>      
  </div>
  ));  
