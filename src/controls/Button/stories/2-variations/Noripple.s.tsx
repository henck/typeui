import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon, Button } from '../../../';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button with the \`noripple\` attribute does not show the ripple effect. This is
    necessary for buttons that change their background color on user interaction.
    `
  })
  .addWithJSX(
    'Noripple', () => (
    <div>
      <Button noripple>Button</Button>
    </div>
  ));  
