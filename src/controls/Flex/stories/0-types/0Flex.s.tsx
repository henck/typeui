import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Flex, Box } from '../../../';

storiesOf('Controls/Flex/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Flex\` is used to create rows and columns that space equally.
    `
  })
  .addWithJSX(
    'Flex',
  () => (
  <Flex>
    <Flex.Row>
      <Flex.Column width={1}>
        <Box>One</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="goldenrod">Two</Box>
      </Flex.Column>
    </Flex.Row>
  </Flex>
  ));  
