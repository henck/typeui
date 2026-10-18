import { Mouse } from '../Mouse';

const Template = (args) => <Mouse {...args} />;

export default {
  title: 'Controls/Mouse/General',
  component: Mouse,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const MouseStory = {
  render: Template.bind({}),
  name: 'Mouse',
  args: {},
};
