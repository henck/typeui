import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text, number } from '@storybook/addon-knobs/react';
import { LabelledValue } from '../../../LabelledValue'

storiesOf('Controls/LabelledValue/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A LabelledValue is just that: a label and a value. It is used for view-only data.

    There is a very slight color change when the mouse hovers over the value.
    `
  })
  .addWithJSX(
    'LabelledValue',
  () => (
    <LabelledValue 
      label={text('Label', 'My Label')} 
      width={number('width', 1)}>
        {text('Content', 'Content')}
      </LabelledValue>
  ));  
