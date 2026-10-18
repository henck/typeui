import { Card } from '../Card';

const Template = (args) => (
  <Card {...args}>
    <Card.Content>Card content</Card.Content>
  </Card>
);

export default {
  title: 'Controls/Card',
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

export const Properties = {
  render: Template.bind({}),
  name: 'Properties',
  args: {},
};
