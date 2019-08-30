import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Gravatar } from '../../../';

storiesOf('Controls/Gravatar/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard gravatar.
    `
  })
  .addWithJSX(
    'Gravatar',
  () => (
    <Gravatar email="alex.vanoostenrijk@gmail.com"/>
  ));  
