import { Form } from '../Form';
import { Input } from '../../Input';

const Template = (args) => <Form {...args}></Form>;

export default {
  title: 'Controls/Form',
  component: Form,

  subcomponents: {
    'Form.Field': Form.Field,
    'Form.Uncontrolled': Form.Uncontrolled,
  },

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {
  render: Template.bind({}),
  name: 'Default',

  args: {
    data: {},
    onChange: () => {},
    onValidate: () => {},
  },
};
