import { CircularProgress } from '../CircularProgress';

const Template = (args) => <CircularProgress {...args} />;

export default {
  title: 'Controls/CircularProgress',
  component: CircularProgress,

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
    value: 50,
    onClick: null,
  },
};
