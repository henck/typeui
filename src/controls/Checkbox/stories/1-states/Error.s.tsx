import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Checkbox } from '../../../';
import { CheckboxType } from '../../../Types';

storiesOf('Controls/Checkbox/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A checkbox can be in an \`error\` state.
    `
  })
  .addWithJSX(
    'Error',
  () => (
    <Checkbox 
      name="mycheck" 
      radio={boolean('radio', false)} 
      type={select('type', ['', 'check', 'toggle', 'slider', 'circle'], '') as CheckboxType} 
      label={text('label', 'My label')} 
      disabled={boolean('disabled', false)}
      error={boolean('error', true)}/>
  ));  
