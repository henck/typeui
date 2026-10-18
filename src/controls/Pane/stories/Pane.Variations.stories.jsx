import { Pane } from '../Pane';

const Template = (args) => <Pane {...args} />;

export default {
  title: 'Controls/Pane/Variations',
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

export const Padded = {
  render: Template.bind({}),
  name: 'padded',

  args: {
    open: true,
    padded: true,
    children: 'Some content.',
  },
};

export const Width = {
  render: Template.bind({}),
  name: 'width',

  args: {
    open: true,
    width: 650,
    children: 'Some content.',
  },
};
