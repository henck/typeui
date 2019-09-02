import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../Button';

storiesOf('Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can be be formatted to show different levels of emphasis: \`primary\` and \`secondary\`.
    `
  })
  .addWithJSX(
    'Emphasis', () => (
    <div>
      <Button primary onClick={action('First button clicked.')}>Primary</Button>
      <Button secondary onClick={action('Second button clicked.')}>Secondary</Button>
    </div>
  ));  
