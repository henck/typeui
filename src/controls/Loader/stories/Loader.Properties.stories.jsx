import { Loader } from '../Loader';

const Template = (args) => <Loader {...args} />;

export default {
  title: 'Controls/Loader',
  component: Loader,

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
