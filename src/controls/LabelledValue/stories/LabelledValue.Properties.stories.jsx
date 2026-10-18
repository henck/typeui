import { LabelledValue } from '../LabelledValue';

const Template = (args) => <LabelledValue {...args} />;

export default {
  title: 'Controls/LabelledValue',
  component: LabelledValue,

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
    label: 'A label',
    children: 'Some value',
  },
};
