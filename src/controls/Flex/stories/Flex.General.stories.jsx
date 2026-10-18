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

const ColumnTemplate = (args) => (
  <Flex {...args}>
    <Flex.Row>
      <Flex.Column>
        <Box color="LightSalmon">One</Box>
      </Flex.Column>
      <Flex.Column width={2}>
        <Box color="moccasin">Two</Box>
      </Flex.Column>
      <Flex.Column>
        <Box color="Lavender">Three</Box>
      </Flex.Column>
    </Flex.Row>
  </Flex>
);

const DividerTemplate = (args) => (
  <Flex {...args}>
    <Flex.Divider>and</Flex.Divider>
    <Flex.Row>
      <Flex.Column width={1}>
        <Box color="khaki">One</Box>
      </Flex.Column>
      <Flex.Column width={1}>
        <Box color="Lavender">Two</Box>
      </Flex.Column>
    </Flex.Row>
  </Flex>
);

const QuickTemplate = (args) => (
  <Flex.Quick {...args}>
    <Icon name="code" />
    Hello
  </Flex.Quick>
);

const RowTemplate = (args) => (
  <Flex {...args}>
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
);

const ColumnsTemplate = (args) => (
  <Flex.Columns count={2}>
    <Box color="goldenrod">One</Box>
    <Box>Two</Box>
    <Box color="skyblue">Three</Box>
    <Box color="LightSalmon">Four</Box>
  </Flex.Columns>
);

export default {
  title: 'Controls/Flex/General',

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

export const ColumnWidth = {
  render: ColumnTemplate.bind({}),
  name: 'Column width',
  args: {},
};

export const FlexDivider = {
  render: DividerTemplate.bind({}),
  name: 'Flex.Divider',

  args: {
    relaxed: 'very',
    stackable: true,
  },
};

export const FlexQuick = {
  render: QuickTemplate.bind({}),
  name: 'Flex.Quick',
  args: {},
};

export const FlexRow = {
  render: RowTemplate.bind({}),
  name: 'Flex.Row',
  args: {},
};

export const FlexColumns = {
  render: ColumnsTemplate.bind({}),
  name: 'Flex.Columns',
  args: {},
};
