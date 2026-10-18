import { Password } from '../Password';
import { Form } from '../../../controls/Form';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="password" value={null} control={<Password {...args} />} />
  </Form>
);

export default {
  title: 'Modules/Password',
  component: Password,

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
    placeholder: 'Password',
  },
};
