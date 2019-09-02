import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs';
import { Card } from '../../../Card';

storiesOf('Controls/Card/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Card.Content\` element can be made \`secondary\` and will have a darker background.
    `
  })
  .addWithJSX(
    'Secondary content',
  () => (
  <Card 
    fluid={boolean('fluid', false, 'Variations')}>
    <Card.Content>
      Card content one.
    </Card.Content>
    <Card.Content secondary>
      Card content two.
    </Card.Content>
  </Card>
  ));  
