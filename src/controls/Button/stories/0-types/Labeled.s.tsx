import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button, Label, Icon, Divider } from '../../../';

storiesOf('Button/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Label\` can be \`attached\` to a button, either \`attached=left\` or \`attached=right\`.
    `
  })
  .addWithJSX(
    'Labeled', () => (
    <div>
      <Button>
        <Label>One</Label>
        Button
      </Button>
      <Divider hidden/>
      <Button>
        <Label attached="left"><Icon name="circle" size="large"/></Label>
        Like
      </Button>            
      <Divider hidden/>
      <Button>
        <Icon name="circle"/>
        <Label basic attached="right">2,048</Label>
        Like
      </Button>            
      <Divider hidden/>
      <Button>
        <Icon name="circle"/>
        <Label basic attached="right">One</Label>
        <Label basic attached="right">Two</Label>
        Button
      </Button>            
      <Divider hidden/>
      <Button>
        <Icon name="circle"/>
        <Label basic pointing attached="right">2,048</Label>
        Like
      </Button>            
      <Divider hidden/>
      <Button color="RoyalBlue">
        <Icon name="circle"/>
        <Label basic pointing attached="right" color="RoyalBlue">42</Label>
        Like
      </Button>            
      <Divider hidden/>
      <Button basic color="crimson">
        <Icon name="circle"/>
        <Label basic pointing attached="right" color="crimson">2,048</Label>
        Forks
      </Button>            
    </div>
  ));  
