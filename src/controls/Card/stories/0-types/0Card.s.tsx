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
    A standard \`Card\`.
    `
  })
  .addWithJSX(
    'Standard Card',
  () => (
  <Card
    fluid={boolean('fluid', false, 'Variations')}>
    <Card.Content>
      Card content
    </Card.Content>
  </Card>
  ));  
