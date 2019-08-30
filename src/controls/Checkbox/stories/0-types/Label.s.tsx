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
    A checkbox can (usually) have a \`label\`. This is not the same as a \`Form.Field\` 
    label. The label is clickable and toggles the checkbox.
    `
  })
  .addWithJSX(
    'Label',
  () => (
    <Checkbox 
      name="mycheck" 
      radio={boolean('radio', false)} 
      type={select('type', ['', 'check', 'toggle', 'slider', 'circle'], '') as CheckboxType} 
      label={text('label', 'Checkbox label')} 
      error={boolean('error', false)}
      disabled={boolean('disabled', false)}/>
  ));  
