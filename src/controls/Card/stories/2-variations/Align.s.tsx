import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { Card } from '../../../';
import { HorizontalAlignment } from '../../../Types';

storiesOf('Card/Variations', module)
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
