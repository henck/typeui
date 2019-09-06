import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s'
import { select, text, boolean } from '@storybook/addon-knobs/react'
import { CheckboxType } from '../../../Types'
import { Checkbox } from '../../../Checkbox'

storiesOf('Controls/Checkbox/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`disabled\` \`Checkbox\` cannot be interacted with.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
    <Checkbox 
      name="mycheck" 
      radio={boolean('radio', false)} 
      type={select('type', ['', 'check', 'toggle', 'slider', 'circle'], '') as CheckboxType} 
      label={text('label', 'My label')} 
      error={boolean('error', false)}
      disabled={boolean('disabled', true)}/>
  ));  
