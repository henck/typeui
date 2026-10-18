import { Message } from '../Message';

const Template = (args) => <Message {...args} />;

export default {
  title: 'Controls/Message',
  component: Message,

  subcomponents: {
    'Message.Content': Message.Content,
    'Message.Header': Message.Header,
  },

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
    children: 'Hello, world.',
  },
};
