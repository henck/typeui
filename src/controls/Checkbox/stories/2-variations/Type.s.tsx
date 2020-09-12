import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s'
import { select, text, boolean } from '@storybook/addon-knobs/react'
import { CheckboxType } from '../../../Types'
import { Checkbox } from '../../../Checkbox'

storiesOf('Controls/Checkbox/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Checkbox\` can have \`type\` \`check\` (default), \`toggle\`, \`slider\` or \`circle\`.

    For \`radio\` buttons, \`type\` will default to \`circle\` unless overridden.
    `
  })
  .addWithJSX(
    'Type',
  () => (
    <Checkbox 
      name="mycheck" 
      radio={boolean('radio', false)} 
      type={select('type', ['', 'check', 'toggle', 'slider', 'circle'], 'toggle') as CheckboxType} 
      label={text('label', 'My label')} 
      error={boolean('error', false)}
      disabled={boolean('disabled', false)}/>
  ));  
