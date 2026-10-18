import { Card } from '../Card';

const Template = (args) => (
  <Card {...args}>
    <Card.Content>Card content</Card.Content>
  </Card>
);

const AlignTemplate = (args) => (
  <Card {...args}>
    <Card.Header align="right">Card header</Card.Header>
    <Card.Content align="right">Card content</Card.Content>
  </Card>
);

const SecondaryTemplate = (args) => (
  <Card {...args}>
    <Card.Content>Card content one.</Card.Content>
    <Card.Content secondary>Card content two.</Card.Content>
  </Card>
);

export default {
  title: 'Controls/Card/Variations',
  component: Card,

  subcomponents: {
    'Card.Content': Card.Content,
    'Card.Header': Card.Header,
    'Card.Meta': Card.Meta,
  },

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Align = {
  render: AlignTemplate.bind({}),
  name: 'align',
  args: {},
};

export const Fluid = {
  render: Template.bind({}),
  name: 'fluid',

  args: {
    fluid: true,
  },
};

export const Raised = {
  render: Template.bind({}),
  name: 'raised',

  args: {
    raied: true,
  },
};

export const Secondary = {
  render: SecondaryTemplate.bind({}),
  name: 'secondary',
  args: {},
};
