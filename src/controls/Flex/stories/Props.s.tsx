import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Flex, Box } from '../../';

storiesOf('Controls/Flex', module)
  .addDecorator(withInfo({...withInfoSettings, propTablesExclude: [Box]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All flex properties.

    Note that to obtain a grid-like flex, it's necessary to set \`width\` on columns.
    Without it, columns will not flex.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Flex      
    divided={boolean('divided', false)}
    stackable={boolean('stackable', false)}
    relaxed={boolean('relaxed', false)}>
    <Flex.Row>
      <Flex.Column>
        <Box color="goldenrod">One</Box>
      </Flex.Column>
      <Flex.Column>
        <Box>Two</Box>
      </Flex.Column>
    </Flex.Row>
    <Flex.Row>
      <Flex.Column>
        <Box color="skyblue">Three</Box>
      </Flex.Column>
      <Flex.Column>
        <Box color="LightSalmon">Four</Box>
      </Flex.Column>
    </Flex.Row>      
  </Flex>
  ));  
