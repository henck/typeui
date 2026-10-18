import { Button } from '../Button';
import { Icon } from '../../Icon';
import { Segment } from '../../Segment';
import { Divider } from '../../Divider';
import { Label } from '../../Label';

const Template = (args) => <Button {...args}>Button</Button>;

export default {
  title: 'Controls/Button',
  component: Button,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },

    grouped: {
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
