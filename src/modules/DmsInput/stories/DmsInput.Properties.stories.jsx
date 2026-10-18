import { DmsInput } from '../DmsInput';
import { Form } from '../../../controls/Form';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="latitude" value={null} control={<DmsInput {...args} />} />
  </Form>
);

export default {
  title: 'Modules/DmsInput',
  component: DmsInput,

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
    isLatitude: true,
  },
};
