import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Flex } from '../../../Flex'
import { Box } from '../../../Box'

storiesOf('Controls/Flex/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Flex.Divider\` can be added between two columns. This *only* works for exactly two columns.

    The divider automatically becomes horizontal when the screen is narrow enough and the Flex is \`stackable\`.
    
    An optional text can be placed in the divider element.
    `
  })
  .addWithJSX(
    'Flex.Divider',
  () => (
    <Flex stackable={boolean('stackable', true, 'Flex')} relaxed="very">
      <Flex.Divider>{text('Divider text', 'and', 'Flex.Divider')}</Flex.Divider>
      <Flex.Row>
        <Flex.Column width={1}>
          <Box color="khaki">One</Box>
        </Flex.Column>
        <Flex.Column width={1}>
          <Box color="Lavender">Two</Box>
        </Flex.Column>
      </Flex.Row>
    </Flex>
  ));  
