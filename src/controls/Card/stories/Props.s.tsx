import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { Card } from '../../Card';

storiesOf('Controls/Card', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Card, Card.Header, Card.Meta, Card.Content]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All \`Card\` properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Card
    fluid={boolean('fluid', false, 'Variations')}
    onClick={action('Card clicked.')}>
    <Card.Header>Card header</Card.Header>
    <Card.Meta>Meta content</Card.Meta>
    <Card.Content>
      Main content of the Card goes into a <b>Card.Content</b> element.
    </Card.Content>
    <Card.Content secondary>
      Secondary content has the <b>secondary</b> attribute set.
    </Card.Content>    
  </Card>
  ));  
