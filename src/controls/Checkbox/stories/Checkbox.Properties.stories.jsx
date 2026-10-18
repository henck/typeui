import { Checkbox } from '../Checkbox';
import { Icon } from '../../Icon';

const Template = (args) => <Checkbox {...args} />;

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,

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
    label: 'My checkbox',
  },
};
