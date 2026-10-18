import { EUI } from '../EUI';

const Template = (args) => <EUI {...args} />;

export default {
  title: 'Formatters/EUI',
  component: EUI,

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
    value: '12345678abcdefaa',
  },
};
