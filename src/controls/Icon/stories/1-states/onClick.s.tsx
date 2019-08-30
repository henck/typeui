import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Icon } from '../../../';

storiesOf('Controls/Icon/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon with an \`onClick\` attribute has a hover transition.
    `
  })
  .addWithJSX(
    'onClick',
  () => (
  <div>
    <Icon name="at" onClick={() => alert('clicked')}/>
    <Icon name="at" bordered onClick={() => alert('clicked')}/>
    <Icon name="at" circular inverted onClick={() => alert('clicked')}/>
  </div>
  ));  
