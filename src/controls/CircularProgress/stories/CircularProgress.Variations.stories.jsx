import { CircularProgress } from '../CircularProgress';

const Template = (args) => <CircularProgress {...args} />;

export default {
  title: 'Controls/CircularProgress/Variations',
  component: CircularProgress,

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
    animated: true,
    value: 50,
    onClick: null,
  },
};

export const Background = {
  render: Template.bind({}),
  name: 'background',

  args: {
    background: true,
    value: 25,
    onClick: null,
  },
};

export const Color = {
  render: Template.bind({}),
  name: 'color',

  args: {
    color: 'green',
    value: 33,
    onClick: null,
  },
};

export const Padded = {
  render: Template.bind({}),
  name: 'padded',

  args: {
    padded: true,
    value: 50,
    onClick: null,
  },
};

export const Radius = {
  render: Template.bind({}),
  name: 'radius',

  args: {
    radius: 80,
    value: 95,
    onClick: null,
  },
};

export const Raised = {
  render: Template.bind({}),
  name: 'raised',

  args: {
    raised: true,
    value: 45,
    onClick: null,
  },
};

export const Rounded = {
  render: Template.bind({}),
  name: 'rounded',

  args: {
    rounded: true,
    value: 50,
    onClick: null,
  },
};

export const Thickness = {
  render: Template.bind({}),
  name: 'thickness',

  args: {
    thickness: 12,
    value: 50,
    onClick: null,
  },
};

export const FontFactor = {
  render: Template.bind({}),
  name: 'fontFactor',

  args: {
    value: 50,
    fontFactor: 1.8,
    onClick: null,
  },
};
