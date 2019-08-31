import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Textarea } from '../../../';

storiesOf('Textarea/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`fluid\` textarea fills all horizontal space available to it.
    `
  })
  .addWithJSX(
    'Fluid',
  () => (
  <Textarea 
    name="search"
    fluid={boolean('fluid', true)} 
    placeholder={text('placeholder', 'Enter description...')}/>
  ));  
