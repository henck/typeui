import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs';
import { Card } from '../../../Card';

storiesOf('Controls/Card/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Card\` can have a \`Card.Meta\` element.
    `
  })
  .addWithJSX(
    'Card.Meta',
  () => (
  <Card
    fluid={boolean('fluid', false, 'Variations')}>
    <Card.Header>
      Card Header
    </Card.Header>
    <Card.Meta>
      Card Meta
    </Card.Meta>    
    <Card.Content>
      Card content one.
    </Card.Content>
    <Card.Content>
      Card content two.
    </Card.Content>
  </Card>
  ));  
