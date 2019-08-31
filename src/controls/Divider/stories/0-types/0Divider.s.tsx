import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Divider, Segment, Input, Label, Button, Icon } from '../../../';

storiesOf('Divider/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard \`Divider\` separates contents vertically using a thin line.
    `
  })
  .addWithJSX(
    'Standard Divider',
  () => (
  <Segment align="center">
    <Input name="search" type="text">
      <Label attached="right" color="SteelBlue" onClick={() => { alert('Search clicked.');}}>Search</Label>
    </Input>
    <Divider
      hidden={boolean('hidden', false, 'Variations')} 
      fitted={boolean('fitted', false, 'Variations')} 
      section={boolean('section', false, 'Variations')} 
    >OR</Divider>
    <Button color="DarkCyan" onClick={() => { alert('Button clicked.');}}>
      <Label color="Teal"><Icon name="code" color="white"/></Label>
      Create New Order
    </Button>
  </Segment>
  ));  
