import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Dropdown } from '../../../';

storiesOf('Dropdown/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An \`inline\` dropdown is useful for a menu bar.
    `
  })
  .addWithJSX(
    'Inline',
  () => (
  <div>
    <Dropdown label={(item:any) => item.name} inline data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
    </Dropdown>   
    <Dropdown label={(item:any) => item.name} inline data={[{id: 1, name: 'Out'}, {id: 2, name:'There'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
    </Dropdown>   
  </div>
  ));  
