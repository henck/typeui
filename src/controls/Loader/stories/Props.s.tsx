import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { Loader } from '../../Loader';

storiesOf('Controls/Loader', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Loader]}))
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

