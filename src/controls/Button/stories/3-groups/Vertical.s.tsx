import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon, Button } from '../../../';

storiesOf('Button/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Buttons can be grouped vertically using \`Button.Group\`, \`vertical\`.
    `
  })
  .addWithJSX(
    'Vertical', () => (
    <Button.Group vertical>
      <Button>One</Button> 
      <Button>Two</Button> 
      <Button>Three</Button> 
    </Button.Group>
  ));  
