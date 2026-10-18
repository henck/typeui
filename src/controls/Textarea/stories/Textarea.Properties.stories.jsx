import { Textarea } from '../Textarea';
import { Form } from '../../Form';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="name" value={null} control={<Textarea {...args} />} />
  </Form>
);

export default {
  title: 'Controls/Textarea',
  component: Textarea,

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
    placeholder: 'Type here',
  },
};
