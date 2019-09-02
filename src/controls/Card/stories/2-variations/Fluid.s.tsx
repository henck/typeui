import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs';
import { Card } from '../../../Card';

storiesOf('Card/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`fluid\` \`Card\` takes up all horizontal space available to it.
    `
  })
  .addWithJSX(
    'Fluid',
  () => (
  <Card
    fluid={boolean('fluid', true, 'Variations')}>
    <Card.Content>
      Card content one.
    </Card.Content>
    <Card.Content secondary>
      Card content two.
    </Card.Content>
  </Card>
  ));  
