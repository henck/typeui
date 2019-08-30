import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { number } from '@storybook/addon-knobs/react';
import { Flex, Box } from '../../../';

storiesOf('Controls/Flex/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
      The \`width\` attribute of \`Flex.Column\` can be used to give weight to a column.
    `
  })
  .addWithJSX(
    'Flex.Column',
  () => (
  <Flex>
    <Flex.Row>
      <Flex.Column>
        <Box color="LightSalmon">One</Box>
      </Flex.Column>
      <Flex.Column width={number('width', 2, {}, 'Flex.Column')}>
        <Box color="moccasin">Two</Box>
      </Flex.Column>
      <Flex.Column>
        <Box color="Lavender">Three</Box>
      </Flex.Column>
    </Flex.Row>
  </Flex>
  ));  
