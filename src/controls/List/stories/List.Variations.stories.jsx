import { List } from '../List';
import { Icon } from '../../Icon';
import { Image } from '../../Image';

const Template = (args) => (
  <List {...args}>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <List.Content>
        <List.Header>Joe Smith</List.Header>
        <List.Description>All-around cool guy</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" />
      <List.Content>
        <List.Header>Veronika Ossi</List.Header>
        <List.Description>Blue in the face</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
      <List.Content>
        <List.Header>Jenny Hess</List.Header>
        <List.Description>Matrix shades</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default {
  title: 'Controls/List/Variations',
  component: List,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Animated = {
  render: Template.bind({}),
  name: 'animated',

  args: {
    align: 'center',
    animated: true,
  },
};

export const Bulleted = {
  render: Template.bind({}),
  name: 'bulleted',

  args: {
    bulleted: true,
    type: 'circle',
  },
};

export const Horizontal = {
  render: Template.bind({}),
  name: 'horizontal',

  args: {
    horizontal: true,
  },
};

export const Ordered = {
  render: Template.bind({}),
  name: 'ordered',

  args: {
    ordered: true,
  },
};

export const Relaxed = {
  render: Template.bind({}),
  name: 'relaxed',

  args: {
    relaxed: true,
  },
};

export const Divided = {
  render: Template.bind({}),
  name: 'divided',

  args: {
    divided: true,
  },
};

export const Selection = {
  render: Template.bind({}),
  name: 'selection',

  args: {
    selection: true,
    divided: false,
  },
};
