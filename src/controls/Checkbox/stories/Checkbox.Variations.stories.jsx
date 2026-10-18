import { Checkbox } from '../Checkbox';
import { Icon } from '../../Icon';

const Template = (args) => <Checkbox {...args} />;

const TypeTemplate = (args) => (
  <div>
    <Checkbox {...args} />
    <Checkbox type="toggle" label="Toggle" />
    <Checkbox type="slider" label="Slider" />
    <Checkbox type="circle" label="Circle" />
  </div>
);

export default {
  title: 'Controls/Checkbox/Variations',
  component: Checkbox,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Type = {
  render: TypeTemplate.bind({}),
  name: 'type',

  args: {
    type: 'check',
    label: 'Check',
  },
};
