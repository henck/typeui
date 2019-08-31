import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, number } from '@storybook/addon-knobs/react';
import { Loader } from '../Loader';

storiesOf('Loader', module)
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

