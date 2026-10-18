import { Icon } from '../Icon';

const Template = (args) => <Icon {...args} />;

export default {
  title: 'Controls/Icon',
  component: Icon,

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
    name: 'bullhorn',
    onClick: null,
  },
};
