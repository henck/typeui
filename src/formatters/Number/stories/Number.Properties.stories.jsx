import { Number } from '../Number';

const Template = (args) => <Number {...args} />;

export default {
  title: 'Formatters/Number',
  component: Number,

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

  args: {
    value: 50000,
    decimals: 2,
  },
};
