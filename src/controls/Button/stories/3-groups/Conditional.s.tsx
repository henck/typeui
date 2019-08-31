import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button, Divider } from '../../../';

storiesOf('Button/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Button groups can contain conditionals using \`Button.Or\`.
    `
  })
  .addWithJSX(
    'Conditional', () => (
    <div>
      <Button.Group>
        <Button>One</Button> 
        <Button.Or/>
        <Button positive>Two</Button> 
      </Button.Group>
      <Divider hidden/>
      <Button.Group>
        <Button>One</Button> 
        <Button.Or/>
        <Button>Two</Button> 
        <Button.Or/>
        <Button>Three</Button> 
      </Button.Group>            
    </div>
  ));  
