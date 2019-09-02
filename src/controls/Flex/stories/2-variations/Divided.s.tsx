import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Flex } from '../../../Flex'
import { Box } from '../../../Box'

storiesOf('Flex/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`divided\` Flex has horizontal dividing lines between rows.
    `
  })
  .addWithJSX(
    'Divided',
  () => (
  <Flex divided={boolean('divided', true)}>
    <Flex.Row>
      <Flex.Column width={2}>
        <Box color="Lavender">One</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="thistle">Two</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="moccasin">Three</Box>
      </Flex.Column>
    </Flex.Row>
    <Flex.Row>
      <Flex.Column width={1}>
        <Box color="PaleGreen">Four</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="LightCyan">Five</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="pink">Six</Box>
      </Flex.Column>
    </Flex.Row>
    <Flex.Row>
      <Flex.Column width={1}>
        <Box color="SkyBlue">Seven</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="NavajoWhite">Eight</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="LavenderBlush">Nine</Box>
      </Flex.Column>
    </Flex.Row>              
  </Flex>
  ));  
