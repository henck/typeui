import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { Segment } from '../../../Segment';

storiesOf('Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can float to the \`left\` or to the \`right\`. (Here, the buttons are placed in a \`Segment\` because segments are self-clearing.)
    `
  })
  .addWithJSX(
    'Float',
  () => (
    <Segment>
      <Button float="left">Button</Button>
      <Button basic float="right"><Icon name="circle"/> Button</Button>
    </Segment>
  ));  
