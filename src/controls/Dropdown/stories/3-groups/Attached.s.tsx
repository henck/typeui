import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Dropdown, Label, Divider } from '../../../';

storiesOf('Dropdown/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Label\` can be attached to the Dropdown.
    `
  })
  .addWithJSX(
    'Attached',
  () => (
  <div>
    <Dropdown placeholder="Select..." label={(item:any) => item.name} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Label>Left (default)</Label>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
    </Dropdown>       
    <Divider hidden/>
    <Dropdown placeholder="Select..." label={(item:any) => item.name} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
      <Label attached="right" color="rebeccapurple">Right</Label>
    </Dropdown>       
    <Divider hidden/>
    <Dropdown placeholder="Select..." label={(item:any) => item.name} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
      <Label attached="right" basic color="rebeccapurple">Right</Label>
    </Dropdown>           
    <Divider hidden/>
    <Dropdown placeholder="Select..." label={(item:any) => item.name} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
      <Label attached="right" tag>Tag</Label>
    </Dropdown>           
    <Divider hidden/>
    <Dropdown placeholder="Select..." label={(item:any) => item.name} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
      <Label attached="right" basic pointing>Pointing</Label>
    </Dropdown>           
  </div>  
  ));  
