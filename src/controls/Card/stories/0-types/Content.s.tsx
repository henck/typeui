import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs';
import { Card } from '../../../Card';

storiesOf('Controls/Card/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Card\` can have any number of \`Card.Content\` elements inside it.
    `
  })
  .addWithJSX(
    'Card.Content',
  () => (
  <Card
    fluid={boolean('fluid', false, 'Variations')}>
    <Card.Content>
      Card content one.
    </Card.Content>
    <Card.Content>
      Card content two.
    </Card.Content>
    <Card.Content>
      Card content three.
    </Card.Content>
  </Card>
  ));  
