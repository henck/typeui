import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../Button';
import { Label } from '../../../Label';
import { Dropdown } from '../../../Dropdown';

storiesOf('Button/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`disabled\` button cannot be interacted with. \`onClick\` event handlers registered on it will not fire.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
    <div>                   
      <Button disabled onClick={action('This will not fire.')}>Button</Button>
      <Button color="crimson" disabled onClick={action('This will not fire.')}>Button</Button>
      <Button color="darkcyan" disabled onClick={action('This will not fire.')}>
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
