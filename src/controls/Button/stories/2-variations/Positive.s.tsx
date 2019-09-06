import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../Button';

storiesOf('Controls/Button/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A button can hint toward a \`positive\` or \`negative\` consequence.
    `
  })
  .addWithJSX(
    'Positive and Negative', () => (
    <div>
      <Button positive onClick={action('First button clicked.')}>Positive</Button>
      <Button negative onClick={action('Second button clicked.')}>Negative</Button>
    </div>
  ));  
