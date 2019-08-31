import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button, Divider } from '../../../';

storiesOf('Button/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Groups can share attributes like \`color\`, \`size\`, \`compact\`, \`basic\` and \`icon\`.
    `
  })
  .addWithJSX(
    'Group attributes', () => (
    <div>
      <Button.Group color="brown" size="big" compact>
        <Button>One</Button> 
        <Button>Two</Button> 
        <Button>Three</Button> 
      </Button.Group>
      <Divider hidden/>
      <Button.Group basic>
        <Button>One</Button> 
        <Button>Two</Button> 
        <Button>Three</Button> 
      </Button.Group>
      <Divider hidden/>
      <Button.Group basic vertical color="brown">
        <Button>One</Button> 
        <Button>Two</Button> 
        <Button>Three</Button> 
      </Button.Group>
    </div>
  ));  
