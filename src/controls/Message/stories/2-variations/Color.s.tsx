import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Message } from '../../../';

storiesOf('Message/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A message can have a custom \`color\`. Note that \`type\` overrides this.
    `
  })
  .addWithJSX(
    'Color',
  () => (
  <div>
    <Message color="SteelBLue">
      <Message.Header>Steel Blue</Message.Header>
      <p>
        A nice shade of blue.
      </p>
    </Message>
    <Message color="HotPink">
      <Message.Header>Hot Pink</Message.Header>
      <p>
        Attractive, isn't it?
      </p>
    </Message>
    <Message color="Brown">
      <Message.Header>Brown</Message.Header>
      <p>
        Brown is not attractive.
      </p>
    </Message>                
  </div>
  ));  
