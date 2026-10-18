import { Segment } from '../Segment';

const Template = (args) => <Segment {...args} />;

export default {
  title: 'Controls/Segment/General',
  component: Segment,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'disabled',

  args: {
    disabled: true,
    children: 'This content is disabled.',
  },
};
