import { Header } from '../Header';
import { Icon } from '../../Icon';
import { Image } from '../../Image';
import { Segment } from '../../Segment';
import { Message } from '../../Message';

const Template = (args) => <Header {...args}>Header</Header>;

export default {
  title: 'Controls/Header',
  component: Header,

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
    size: 'h3',
  },
};
