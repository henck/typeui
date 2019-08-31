import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Input, Label, Icon, Dropdown, Divider } from '../../../';

storiesOf('Input/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Label\` can be attached to the \`Input\`. Labels are passed as children. The \`attached\` 
    attribute is used to determine which side of the input the label is on.

    Any \`Label\` attributes may be used, so labels can be clickable, colored etc. Labels can contain
    any content, as well.
    `
  })
  .addWithJSX(
    'Attached',
  () => (
  <div>
    <Input name="value" type="text" placeholder="Enter value...">
      <Label basic>Before</Label>
      <Label basic attached="right">First after</Label>
      <Label basic attached="right">Second after</Label>
    </Input>
    <Divider hidden/>
    <Input name="weight" type="text" placeholder="Enter weight...">
      <Label basic attached="right">kg</Label>
    </Input>
    <Divider hidden/>
    <Input name="email" type="text" placeholder="Email...">
      <Label color="rebeccapurple" onClick={() => { alert('Clicked');}}><Icon color="white" name="at"/></Label>
    </Input>
    <Divider hidden/>
    <Input name="tags" type="text" placeholder="Enter tags">
      <Label tag attached="right">Add tag</Label>
    </Input>
    <Divider hidden/>
    <Input name="distance" type="text" placeholder="Enter distance">
      <Label basic pointing attached="right">km</Label>
    </Input>
    <Divider hidden/>
    <Input name="domain" type="text" placeholder="Enter domain...">
      <Label basic attached="right">
        <Dropdown placeholder="Select TLD" label={(item:any) => item.name} inline data={[{id: 1, name: '.net'}, {id: 2, name:'.com'}, { id: 3, name: '.org'}]}>
          <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
        </Dropdown>
      </Label>
    </Input>
  </div>
  ));  
