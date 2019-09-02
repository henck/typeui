import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Divider } from '../../Divider';

storiesOf('Controls/Divider', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Divider\` is used to separate blocks of contents vertically. Dividers can be invisible or contain
    a horizontal line. Dividers can also contain content.
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
