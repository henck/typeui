import { Segment } from '../Segment';

const Template = (args) => <Segment {...args} />;

export default {
  title: 'Controls/Segment',
  component: Segment,

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
    children: 'Some content.',
  },
};
