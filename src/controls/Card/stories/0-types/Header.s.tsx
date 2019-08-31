import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Card } from '../../../';

storiesOf('Card/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Card\` can have a \`Card.Header\` element.
    `
  })
  .addWithJSX(
    'Card.Header',
  () => (
  <Card
    fluid={boolean('fluid', false, 'Variations')}>
    <Card.Header>
      Card Header
    </Card.Header>
    <Card.Content>
      Card content one.
    </Card.Content>
    <Card.Content>
      Card content two.
    </Card.Content>
  </Card>
  ));  
