import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon, Button } from '../../../';

storiesOf('Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can be \`circular\`. Note that this implies the \`icon\` attribute.
    `
  })
  .addWithJSX(
    'Circular', () => (
    <div>
      <Button circular><Icon name="circle"/></Button>
      <Button circular color="tan"><Icon name="code"/></Button>
      <Button basic circular icon><Icon name="circle"/></Button>
    </div>
  ));  
