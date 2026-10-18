import { MarkdownTextarea } from '../MarkdownTextarea';
import { Form } from '../../../controls/Form';

const Template = (args) => (
  <Form data={{}} onChange={() => {}} onValidate={() => {}}>
    <Form.Field name="description" value={null} control={<MarkdownTextarea {...args} />} />
  </Form>
);

export default {
  title: 'Modules/MarkdownTextarea',
  component: MarkdownTextarea,

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
    rows: 15,
    placeholder: 'Description',
  },
};

export const Translations = {
  render: Template.bind({}),
  name: 'Translations',

  args: {
    rows: 15,
    placeholder: 'Descrição',
    label_markdown: 'é suportado',
    label_preview: 'Pre-visualização',
    label_text: 'Texto',
  },
};
