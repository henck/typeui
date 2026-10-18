import { Message } from '../Message';
import { Icon } from '../../Icon';

const Template = (args) => <Message {...args} />;

const IconTemplate = (args) => (
  <Message {...args}>
    <Icon name="circle-notch" size="big" loading="true" />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      <p>We are fetching content for you.</p>
    </Message.Content>
  </Message>
);

export default {
  title: 'Controls/Message/General',
  component: Message,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const IconStory = {
  render: IconTemplate.bind({}),
  name: 'Icon',

  args: {
    icon: true,
  },
};

export const Hidden = {
  render: IconTemplate.bind({}),
  name: 'hidden',

  args: {
    hidden: true,
    icon: true,
  },
};
