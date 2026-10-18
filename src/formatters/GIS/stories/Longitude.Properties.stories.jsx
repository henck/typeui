import { Longitude } from '../GIS';

const Template = (args) => <Longitude {...args} />;

export default {
  title: 'Formatters/Longitude',
  component: Longitude,

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
    value: 30.12,
  },
};
