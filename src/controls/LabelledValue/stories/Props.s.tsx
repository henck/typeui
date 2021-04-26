import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { text, number } from '@storybook/addon-knobs/react';
import { LabelledValue } from '../../LabelledValue'

storiesOf('Controls/LabelledValue', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [LabelledValue]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All LabelledValue properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <LabelledValue
    label={text('label', 'My label')}
    width={number('width', 1)}>
    Content
  </LabelledValue>
  ));  

