import { Icon } from '../Icon';

const Template = (args) => <Icon {...args} />;

export default {
  title: 'Controls/Icon/General',
  component: Icon,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Url = {
  render: Template.bind({}),
  name: 'url',

  args: {
    url: '/spritemap.svg#bullhorn',
    onClick: null,
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'disabled',

  args: {
    name: 'bullhorn',
    onClick: null,
    disabled: true,
  },
};

export const OnClick = {
  render: Template.bind({}),
  name: 'onClick',

  args: {
    name: 'bullhorn',
    onClick: () => {},
  },
};
