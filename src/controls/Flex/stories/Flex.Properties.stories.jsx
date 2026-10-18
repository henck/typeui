import { Flex } from '../Flex';
import { Box } from '../../Box';

const Template = (args) => (
  <Flex {...args}>
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
);

export default {
  title: 'Controls/Flex',

  subcomponents: {
    'Flex.Column': Flex.Column,
    'Flex.Row': Flex.Row,
    'Flex.Divider': Flex.Divider,
    'Flex.Quick': Flex.Quick,
    'Flex.Columns': Flex.Columns,
  },

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Properties = {
  render: Template.bind({}),
  name: 'Properties',
  args: {},
};
