import { Progress } from '../Progress';

const Template = (args) => <Progress {...args} />;

export default {
  title: 'Controls/Progress',
  component: Progress,

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
