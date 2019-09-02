import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Flex } from '../../../Flex'
import { Box } from '../../../Box'

storiesOf('Flex/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    There can be multiple \`Flex.Row\` elements, but there is no vertical connection between cells (this is not a grid).
    `
  })
  .addWithJSX(
    'Flex.Row',
  () => (
  <Flex>
    <Flex.Row>
      <Flex.Column>
        <Box color="goldenrod">One</Box>
      </Flex.Column>
      <Flex.Column>
        <Box>Two</Box>
      </Flex.Column>
    </Flex.Row>
    <Flex.Row>
      <Flex.Column width={1}>
        <Box color="skyblue">Three</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="LightSalmon">Four</Box>
      </Flex.Column>
    </Flex.Row>
  </Flex>
  ));  
