import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Divider } from '../../';

storiesOf('Controls/Divider', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All divider properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Divider      
      fitted={boolean('fitted', false)}
      hidden={boolean('hidden', false)}
      section={boolean('section', false)}>
    </Divider>
  </div>
  ));  
