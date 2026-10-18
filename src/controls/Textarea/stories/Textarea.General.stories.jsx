import { Textarea } from '../Textarea';
import { Form } from '../../Form';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="name" value={null} control={<Textarea {...args} />} />
  </Form>
);

export default {
  title: 'Controls/Textarea/General',
  component: Textarea,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const MinHeight = {
  render: Template.bind({}),
  name: 'minHeight',

  args: {
    minHeight: 180,
    rows: null,
  },
};

export const Rows = {
  render: Template.bind({}),
  name: 'rows',

  args: {
    minHeight: null,
    rows: 8,
  },
};

export const Disabled = {
  render: Template.bind({}),
  name: 'disabled',

  args: {
    disabled: true,
  },
};

export const Error = {
  render: Template.bind({}),
  name: 'error',

  args: {
    error: true,
  },
};
