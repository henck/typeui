import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Checkbox } from '../../../';
import { CheckboxType } from '../../../Types';

storiesOf('Controls/Checkbox/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard checkbox.
    `
  })
  .addWithJSX(
    'Checkbox',
  () => (
    <Checkbox 
      name="mycheck" 
      radio={boolean('radio', false)} 
      type={select('type', ['', 'check', 'toggle', 'slider', 'circle'], '') as CheckboxType} 
      label={text('label', 'My label')} 
      error={boolean('error', false)}
      disabled={boolean('disabled', false)}/>
  ));  