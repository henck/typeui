import { Checkbox } from '../Checkbox';
import { Icon } from '../../Icon';
import { Divider } from '../../Divider';

const Template = (args) => <Checkbox {...args} />;

const RadioTemplate = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Checkbox {...args} />
    <Divider hidden />
    <Checkbox name="myradio" radio value={2} label="Two" />
    <Divider hidden />
    <Checkbox name="myradio" radio value={3} label="Three" />
  </div>
);

export default {
  title: 'Controls/Checkbox/General',
  component: Checkbox,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Label = {
  render: Template.bind({}),
  name: 'label',

  args: {
    label: 'My label',
  },
};

export const Radio = {
  render: RadioTemplate.bind({}),
  name: 'radio',

  args: {
    radio: true,
    label: 'One',
    value: 1,
    name: 'myradio',
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'disabled',

  args: {
    disabled: true,
    label: 'Disabled checkbox',
  },
};

export const Error = {
  render: Template.bind({}),
  name: 'error',

  args: {
    error: true,
    label: 'Checkbox with error',
  },
};
