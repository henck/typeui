import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button, Label, Dropdown } from '../../../';

storiesOf('Button/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`disabled\` button cannot be interacted with.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
    <div>                   
      <Button disabled onClick={() => { alert('This will not fire.');}}>Button</Button>
      <Button color="crimson" disabled onClick={() => { alert('This will not fire.');}}>Button</Button>
      <Button color="darkcyan" disabled onClick={() => { alert('This will not fire.');}}>
        <Label attached="right">
          <Dropdown 
            placeholder="Select TLD" 
            label={(item:any) => item.name}
            inline 
            data={[{id: 1, name: '.com'}, {id: 2, name:'.net'}, {id: 3, name: '.org'}]}>
            <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
          </Dropdown>
        </Label>
        Button
      </Button>
    </div>
  ));  
