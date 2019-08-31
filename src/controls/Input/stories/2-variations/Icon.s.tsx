import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Icon, Divider, Input } from '../../../';

storiesOf('Input/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An input can be formatted with an \`Icon\`.
    `
  })
  .addWithJSX(
    'Icon',
  () => (
  <div>
    <Input 
      name="code"
      type="text" 
      icon="code"
      placeholder="Icon name"/>
    <Divider hidden/>
    <Input 
      name="code"
      type="text" 
      icon={{name: 'code', circular: true, inverted: true, color: 'grey'}}
      placeholder="Icon props">
      <Icon name="code"/>
    </Input>
    <Divider hidden/>
    <Input 
      name="code"
      type="text" 
      placeholder="Icon element">
      <Icon name="code"/>
    </Input>    
    <Divider hidden/>
    <Input 
      name="code"
      type="text" 
      placeholder="Icon element w/ props">
      <Icon 
        name="code" circular inverted color="grey"/>
    </Input>    
    <Divider hidden/>    
    <Input 
      name="code"
      type="date" 
      icon="code"
      placeholder="Date"/>    
    <Divider hidden/>    
    <Input 
      name="code"
      type="color" 
      icon="code"
      placeholder="Color"/>    
    
  </div>
  ));  
