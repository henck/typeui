import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from '../../../Button';

storiesOf('Controls/Button/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard \`Button\` has no bold text.
    `
  })
  .addWithJSX(
    'Standard Button',
  () => (
  <Button      
    onClick={action('Button clicked.')}>
    {text("Label", "Button")}
  </Button>
  ));  
