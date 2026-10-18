import { Card } from '../Card';

const ContentTemplate = (args) => (
  <Card {...args}>
    <Card.Content>Card content one.</Card.Content>
    <Card.Content>Card content two.</Card.Content>
    <Card.Content>Card content three.</Card.Content>
  </Card>
);

const HeaderTemplate = (args) => (
  <Card {...args}>
    <Card.Header>Card Header</Card.Header>
    <Card.Content>Card content one.</Card.Content>
    <Card.Content>Card content two.</Card.Content>
    <Card.Content>Card content three.</Card.Content>
  </Card>
);

const MetaTemplate = (args) => (
  <Card {...args}>
    <Card.Header>Card Header</Card.Header>
    <Card.Content>Card content.</Card.Content>
    <Card.Meta>Card Meta</Card.Meta>
  </Card>
);

export default {
  title: 'Controls/Card/General',
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

export const CardContent = {
  render: ContentTemplate.bind({}),
  name: 'Card.Content',
  args: {},
};

export const CardHeader = {
  render: HeaderTemplate.bind({}),
  name: 'Card.Header',
  args: {},
};

export const CardMeta = {
  render: MetaTemplate.bind({}),
  name: 'Card.Meta',
  args: {},
};
