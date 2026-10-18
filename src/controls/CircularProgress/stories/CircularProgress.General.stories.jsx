import { CircularProgress } from '../CircularProgress';

const Template = (args) => <CircularProgress {...args} />;

const ValueTemplate = (args) => (
  <div>
    <CircularProgress {...args} />
    <CircularProgress padded color="green" background value={50} />
    <CircularProgress padded color="pink" background value={80} />
    <CircularProgress padded color="red" background value={100} />
  </div>
);

export default {
  title: 'Controls/CircularProgress/General',
  component: CircularProgress,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Value = {
  render: ValueTemplate.bind({}),
  name: 'value',

  args: {
    value: 30,
    onClick: null,
    padded: true,
    background: true,
  },
};

export const OnClick = {
  render: Template.bind({}),
  name: 'onClick',

  args: {
    value: 30,
    onClick: () => {},
  },
};
