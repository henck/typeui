import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs';
import { Card } from '../../../Card';

storiesOf('Controls/Card/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`raised\` \`Card\` will have an extra-strong dropshadow.
    `
  })
  .addWithJSX(
    'Raised',
  () => (
  <Card
    fluid={boolean('raised', true, 'Variations')}>
    <Card.Content>
      Card content one.
    </Card.Content>
    <Card.Content secondary>
      Card content two.
    </Card.Content>
  </Card>
  ));  
