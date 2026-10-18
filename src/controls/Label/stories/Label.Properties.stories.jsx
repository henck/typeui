import { Label } from '../Label';

const Template = (args) => <Label {...args} />;

export default {
  title: 'Controls/Label',
  component: Label,

  subcomponents: {
    'Label.Detail': Label.Detail,
    'Label.Group': Label.Group,
  },

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
    onClick: null,
    children: 'Label',
  },
};
