import { Pane } from '../Pane';

const Template = (args) => <Pane {...args} />;

export default {
  title: 'Controls/Pane',
  component: Pane,
  subcomponents: {},

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
    open: true,
    children: 'Some content',
  },
};
