import { Filesize } from '../Filesize';

const Template = (args) => <Filesize {...args} />;

export default {
  title: 'Formatters/Filesize',
  component: Filesize,

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
  },
};
