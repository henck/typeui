import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Flex, Icon } from '../../../';

storiesOf('Controls/Flex/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Flex.Quick\` is used to vertically-align content in a row, and putting small spacing between items. 
    Optionally, an \`align\` prop of \`center\`, \`top\` or \`bottom\` can be provided. The default is \`center\`.
    `
  })
  .addWithJSX(
    'Flex.Quick',
  () => (
    <Flex.Quick>
      <Icon name="code"/>Hello
    </Flex.Quick>
  ));  
