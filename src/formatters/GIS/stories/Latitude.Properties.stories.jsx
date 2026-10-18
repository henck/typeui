import { Latitude } from '../GIS';

const Template = (args) => <Latitude {...args} />;

export default {
  title: 'Formatters/Latitude',
  component: Latitude,

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
    value: 10.45,
  },
};
