import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { text, number } from '@storybook/addon-knobs/react';
import { Loader } from '../../Loader';

storiesOf('Controls/Loader', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All Loader properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Loader/>
  ));  

