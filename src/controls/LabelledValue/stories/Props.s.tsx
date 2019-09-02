import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, number } from '@storybook/addon-knobs/react';
import { LabelledValue } from '../../LabelledValue'

storiesOf('LabelledValue', module)
  .addDecorator(withInfo(withInfoSettings))
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

