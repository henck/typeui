import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Textarea } from '../../../Textarea'

storiesOf('Controls/Textarea/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard textarea, with an optional \`placeholder\` value.
    `
  })
  .addWithJSX(
    'Textarea',
  () => (
  <Textarea name="description" placeholder={text('placeholer', 'Please write some text')}/>
  ));  
