import { Progress } from '../Progress';

const Template = (args) => <Progress {...args} />;

const ValueTemplate = (args) => (
  <div>
    <Progress {...args} />
    <Progress padded color="green" background value={50} />
    <Progress padded color="pink" background value={80} />
    <Progress padded color="red" background value={100} />
  </div>
);

export default {
  title: 'Controls/Progress/General',
  component: Progress,

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
