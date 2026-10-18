import { Key } from '../Key';

const Template = (args) => <Key {...args}>CTRL</Key>;

export default {
  title: 'Controls/Key/General',
  component: Key,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const KeyStory = {
  render: Template.bind({}),
  name: 'Key',
};
