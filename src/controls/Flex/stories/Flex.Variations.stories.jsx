import { Flex } from '../Flex';
import { Box } from '../../Box';
import { Icon } from '../../Icon';

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
  title: 'Controls/Flex/Variations',

  subcomponents: {
    'Flex.Column': Flex.Column,
    'Flex.Row': Flex.Row,
    'Flex.Divider': Flex.Divider,
    'Flex.Quick': Flex.Quick,
  },

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Divided = {
  render: Template.bind({}),
  name: 'divided',

  args: {
    divided: true,
  },
};

export const Relaxed = {
  render: Template.bind({}),
  name: 'relaxed',

  args: {
    relaxed: true,
  },
};

export const Stackable = {
  render: Template.bind({}),
  name: 'stackable',

  args: {
    stackable: true,
  },
};
