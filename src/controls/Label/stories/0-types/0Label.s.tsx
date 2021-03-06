import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text } from '@storybook/addon-knobs/react';
import { Label } from '../../../Label'

storiesOf('Controls/Label/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard label.
    `
  })
  .addWithJSX(
    'Label',
  () => (
  <Label>{text('Label text', 'Label')}</Label>
  ));  
