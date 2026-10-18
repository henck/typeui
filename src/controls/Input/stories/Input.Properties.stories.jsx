import { Input } from '../Input';
import { Form } from '../../Form';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="name" value={null} control={<Input {...args} />} />
  </Form>
);

export default {
  title: 'Controls/Input',
  component: Input,

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Properties = {
  render: Template.bind({}),
  name: 'Properties',

  args: {
    placeholder: 'Type here...',
  },
};
