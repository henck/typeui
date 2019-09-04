import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Textarea } from '../../../Textarea'

storiesOf('Controls/Textarea/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`monospaced\` \`Textarea\` uses a monospaced font. 
    `
  })
  .addWithJSX(
    'Monospaced', 
  () => (
  <Textarea 
    monospaced={boolean('monospaced', true)} 
    placeholder={text('placeholder', 'Enter description...')}/>
  ));  
