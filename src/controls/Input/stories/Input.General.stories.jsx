import { Input } from '../Input';
import { Form } from '../../Form';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="name" value={null} control={<Input {...args} />} />
  </Form>
);

const NoFormTemplate = (args) => <Input {...args} />;

const ScrollingTemplate = (args) => (
  <div style={{ height: '400px', overflowY: 'auto' }}>
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <div style={{ height: '400px', background: 'grey' }}>400px spacer</div>
      <Form.Field label="direction" name="name" value={null} control={<Input {...args} />} />
      <div style={{ height: '400px', background: 'grey' }}>400px spacer</div>
    </Form>
  </div>
);

export default {
  title: 'Controls/Input/General',
  component: Input,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Direction = {
  render: ScrollingTemplate.bind({}),
  name: 'direction',

  args: {
    placeholder: 'direction',
    direction: 'parent',
    type: 'date',
  },
};

export const Clearable = {
  render: Template.bind({}),
  name: 'clearable',

  args: {
    clearable: true,
    placeholder: 'Clearable',
  },
};

export const Color = {
  render: Template.bind({}),
  name: 'color',

  args: {
    type: 'color',
    placeholder: 'Select color',
  },
};

export const Date = {
  render: Template.bind({}),
  name: 'date',

  args: {
    type: 'date',
    format: 'dd-MM-yyyy',
    placeholder: 'Select date',
  },
};

export const Time = {
  render: Template.bind({}),
  name: 'time',

  args: {
    type: 'time',
    placeholder: 'Select time',
    clock: true,
  },
};

export const Disabled = {
  render: NoFormTemplate.bind({}),
  name: 'disabled',

  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const Error = {
  render: NoFormTemplate.bind({}),
  name: 'error',

  args: {
    error: true,
    placeholder: 'Error',
  },
};
