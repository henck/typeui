import { Circle } from '../Circle';
import { Icon } from '../../Icon';

const Template = (args) => (
  <Circle {...args}>
    <div>
      One <Icon color="white" name="at" />
    </div>
    <div>
      Two <Icon color="white" name="chevron" />
    </div>
    <div>
      Three <Icon color="white" name="area-chart" />
    </div>
    <div>
      Four <Icon color="white" name="bullhorn" />
    </div>
    <div>
      Five <Icon color="white" name="edit" />
    </div>
  </Circle>
);

export default {
  title: 'Controls/Circle',
  component: Circle,

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
  args: {},
};
