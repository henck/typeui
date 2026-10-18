import { Gravatar } from '../Gravatar';

const Template = (args) => <Gravatar {...args} />;

export default {
  title: 'Controls/Gravatar/General',
  component: Gravatar,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Size = {
  render: Template.bind({}),
  name: 'Size',

  args: {
    email: 'alex.vanoostenrijk@gmail.com',
    size: 'tiny',
  },
};

export const Unknown = {
  render: Template.bind({}),
  name: 'Unknown',
  args: {},
};
