import { Textarea } from '../Textarea';
import { Form } from '../../Form';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="name" value={null} control={<Textarea {...args} />} />
  </Form>
);

export default {
  title: 'Controls/Textarea/Variations',
  component: Textarea,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Fluid = {
  render: Template.bind({}),
  name: 'fluid',

  args: {
    fluid: true,
  },
};

export const Monospaced = {
  render: Template.bind({}),
  name: 'monospaced',

  args: {
    monospaced: true,
  },
};

export const Placeholder = {
  render: Template.bind({}),
  name: 'placeholder',

  args: {
    placeholder: 'Write here...',
  },
};

export const Transparent = {
  render: Template.bind({}),
  name: 'transparent',

  args: {
    placeholder: 'Transparent',
    transparent: true,
  },
};
