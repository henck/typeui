import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text } from '@storybook/addon-knobs/react';
import { Textarea } from '../../../Textarea'

storiesOf('Controls/Textarea/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A textarea can have a \`placeholder\` text value.
    `
  })
  .addWithJSX(
    'Placeholder',
  () => (
  <Textarea name="search" placeholder={text('placeholder', 'Enter description...')}/>
  ));  
