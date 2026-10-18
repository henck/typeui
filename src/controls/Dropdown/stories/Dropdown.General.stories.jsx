import { Dropdown } from '../Dropdown';
import { Form } from '../../Form';
import { Label } from '../../Label';

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
const people = [
  { id: 1, name: 'John', relation: 'friend' },
  { id: 2, name: 'Zachary', relation: 'uncle' },
  { id: 3, name: 'Deke', relation: 'friend' },
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

const NoFormTemplate = (args) => (
  <div style={{ height: '250px' }}>
    <Dropdown {...args}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
    </Dropdown>
  </div>
);

const ColumnsTemplate = (args) => (
  <div style={{ height: '250px' }}>
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        name="person"
        value={null}
        control={
          <Dropdown {...args}>
            <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
            <Dropdown.Column>{(item) => <Label>{item.relation}</Label>}</Dropdown.Column>
          </Dropdown>
        }
      />
    </Form>
  </div>
);

const ErrorTemplate = (args) => (
  <Dropdown {...args}>
    <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
  </Dropdown>
);

export default {
  title: 'Controls/Dropdown/General',
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

export const Columns = {
  render: ColumnsTemplate.bind({}),
  name: 'Columns',

  args: {
    data: people,
    direction: 'down',
    maxItems: 4,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const Multiple = {
  render: Template.bind({}),
  name: 'multiple',

  args: {
    multiple: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const Disabled = {
  render: NoFormTemplate.bind({}),
  name: 'disabled',

  args: {
    value: null,
    disabled: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const Error = {
  render: NoFormTemplate.bind({}),
  name: 'error',

  args: {
    value: null,
    error: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};
