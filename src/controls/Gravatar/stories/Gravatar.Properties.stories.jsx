import { Gravatar } from '../Gravatar';

const Template = (args) => <Gravatar {...args} />;

export default {
  title: 'Controls/Gravatar',
  component: Gravatar,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    email: 'alex.vanoostenrijk@gmail.com',
  },
};
