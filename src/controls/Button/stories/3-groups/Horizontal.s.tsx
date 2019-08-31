import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon, Button, Divider } from '../../../';

storiesOf('Button/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Buttons can be grouped horizontally using \`Button.Group\`.
    `
  })
  .addWithJSX(
    'Horizontal', () => (
    <div>                   
      <Button.Group>
        <Button>One</Button> 
        <Button>Two</Button> 
        <Button>Three</Button> 
      </Button.Group>
      <Divider hidden/>
      <Button.Group basic icon>
        <Button><Icon name="code"/></Button> 
        <Button><Icon name="exchange"/></Button> 
        <Button><Icon name="circle"/></Button> 
      </Button.Group>            
    </div>
  ));  
