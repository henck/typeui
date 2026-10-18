import { Dropzone } from '../Dropzone';

const Template = (args) => <Dropzone {...args} />;

export default {
  title: 'Controls/Dropzone',
  component: Dropzone,

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
