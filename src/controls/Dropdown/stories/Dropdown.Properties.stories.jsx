import { Dropdown } from '../Dropdown';
import { Form } from '../../Form';

const domains = [
  { id: 1, name: '.com' },
  { id: 2, name: '.net' },
  { id: 3, name: '.org' },
  { id: 4, name: '.online' },
  { id: 5, name: '.xyz' },
  { id: 6, name: '.software' },
  { id: 7, name: '.io' },
  { id: 8, name: '.edu' },
  { id: 9, name: '.tech' },
];

const Template = (args) => (
  <div style={{ height: '250px' }}>
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        name="Domain"
        value={null}
        control={
          <Dropdown {...args}>
            <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
          </Dropdown>
        }
      />
    </Form>
  </div>
);

export default {
  title: 'Controls/Dropdown',
  component: Dropdown,

  subcomponents: {
    'Dropdown.Column': Dropdown.Column,
  },

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
    data: domains,
    onSearch: null,
    placeholder: 'Select domain',
    maxItems: 4,
    direction: 'down',
    label: (item) => item.name,
  },
};
