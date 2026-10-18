import { LabelledValue } from '../LabelledValue';

const Template = (args) => <LabelledValue {...args} />;

export default {
  title: 'Controls/LabelledValue/General',
  component: LabelledValue,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const OnClick = {
  render: Template.bind({}),
  name: 'onClick',

  args: {
    onClick: () => {},
    label: 'A label',
    children: 'Some value',
  },
};
