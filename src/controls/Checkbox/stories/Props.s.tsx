import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s'
import { select, text, boolean } from '@storybook/addon-knobs/react'
import { CheckboxType } from '../../Types'
import { Checkbox } from '../../Checkbox'

storiesOf('Controls/Checkbox', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All \`Checkbox\` properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Checkbox 
    name="mycheck" 
    radio={boolean('radio', false)} 
    type={select('type', ['', 'check', 'toggle', 'slider', 'circle'], '') as CheckboxType} 
    label={text('label', 'My label')} 
    error={boolean('error', false)}
    disabled={boolean('disabled', false)}/>
  ));  
