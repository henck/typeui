import { Progress } from '../Progress';

const Template = (args) => <Progress {...args} />;

export default {
  title: 'Controls/Progress/Variations',
  component: Progress,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Background = {
  render: Template.bind({}),
  name: 'background',

  args: {
    background: true,
    value: 50,
    onClick: null,
  },
};

export const Bordered = {
  render: Template.bind({}),
  name: 'bordered',

  args: {
    bordered: true,
    value: 75,
    onClick: null,
  },
};

export const Color = {
  render: Template.bind({}),
  name: 'color',

  args: {
    color: 'pink',
    value: 66,
    onClick: null,
  },
};

export const Numbered = {
  render: Template.bind({}),
  name: 'numbered',

  args: {
    numbered: true,
    value: 45,
    onClick: null,
  },
};

export const Raised = {
  render: Template.bind({}),
  name: 'raised',

  args: {
    raised: true,
    background: true,
    value: 70,
    onClick: null,
  },
};

export const Rectangular = {
  render: Template.bind({}),
  name: 'rectangular',

  args: {
    rectangular: true,
    value: 85,
    onClick: null,
  },
};

export const Thickness = {
  render: Template.bind({}),
  name: 'thickness',

  args: {
    thickness: 20,
    value: 58,
    onClick: null,
  },
};

export const Padded = {
  render: Template.bind({}),
  name: 'padded',

  args: {
    padded: true,
    value: 58,
    onClick: null,
  },
};
