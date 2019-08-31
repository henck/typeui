import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, number } from '@storybook/addon-knobs/react';
import { Loader } from '../..';

storiesOf('Loader/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
      A Loader projects a loading animation over the entire screen.
    `
  })
  .addWithJSX(
    'Loader',
  () => (
    <Loader/>
  ));  
