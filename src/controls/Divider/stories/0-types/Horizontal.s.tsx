import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Divider, Segment, Button, Label, Icon, Input } from '../../../';

storiesOf('Divider/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A horizontal divider can segment content horizontally.
    `
  })
  .addWithJSX(
    'Horizontal',
  () => (
  <div>
    <Segment align="center">
      <Input name="search" type="text">
        <Label attached="right" color="SteelBlue" onClick={() => { alert('Search clicked.');}}>Search</Label>
      </Input>
      <Divider>OR</Divider>
      <Button color="DarkCyan" onClick={() => { alert('Button clicked.');}}>
        <Label color="Teal"><Icon name="code" color="white"/></Label>
        Create New Order
      </Button>
    </Segment>
  </div>
  ));  
