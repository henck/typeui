import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { action } from '@storybook/addon-actions';
import { Icon } from '../../../';

storiesOf('Icon/States', module)
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
    <Icon padded name="at" onClick={action('Icon clicked')}/>
    <Icon padded name="at" bordered onClick={action('Icon clicked')}/>
    <Icon padded name="at" circular inverted onClick={action('Icon clicked')}/>
  </div>
  ));  
