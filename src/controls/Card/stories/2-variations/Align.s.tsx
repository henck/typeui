import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean, select } from '@storybook/addon-knobs';
import { HorizontalAlignment } from '../../../Types';
import { Card } from '../../../Card';

storiesOf('Controls/Card/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    \`Card.Content\` and \`Card.Header\` elements can have horizontal alignment.
    `
  })
  .addWithJSX(
    'Align',
  () => (
  <Card
    fluid={boolean('fluid', false, 'Variations')}>
    <Card.Header align={select('align', ['', 'left', 'center', 'right'], 'right', 'Variations') as HorizontalAlignment}>
      Card header
    </Card.Header>
    <Card.Content align={select('align', ['', 'left', 'center', 'right'], 'right', 'Variations') as HorizontalAlignment}>
      Card content
    </Card.Content>
  </Card>
  ));  
