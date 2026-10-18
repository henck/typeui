import { Dropdown } from '../Dropdown';
import { Icon } from '../../Icon';
import { Form } from '../../Form';
import { Label } from '../../Label';

const data = [
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
const ages = [
  { id: 1, name: 'John', age: 26 },
  { id: 2, name: 'Zachary', age: 18 },
  { id: 3, name: 'Deke', age: 38 },
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

const AlignTemplate = (args) => (
  <div style={{ height: '250px' }}>
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        name="Domain"
        value={null}
        control={
          <Dropdown {...args}>
            <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
            <Dropdown.Column align="right">{(item) => item.age}</Dropdown.Column>
          </Dropdown>
        }
      />
    </Form>
  </div>
);

const WeightTemplate = (args) => (
  <div style={{ height: '250px' }}>
    <Form data={{}} onChange={() => {}} onValidate={() => {}}>
      <Form.Field
        name="person"
        value={null}
        control={
          <Dropdown {...args}>
            <Dropdown.Column weight={4}>{(item) => item.name}</Dropdown.Column>
            <Dropdown.Column weight={1}>{(item) => item.relation}</Dropdown.Column>
          </Dropdown>
        }
      />
    </Form>
  </div>
);

export default {
  title: 'Controls/Dropdown/Variations',
  component: Dropdown,
};

export const Align = {
  render: AlignTemplate.bind({}),
  name: 'align',

  args: {
    direction: 'down',
    maxItems: 4,
    data: ages,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const Gap = {
  render: AlignTemplate.bind({}),
  name: 'gap',

  args: {
    direction: 'down',
    maxItems: 4,
    data: ages,
    gap: 0,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const Clearable = {
  render: Template.bind({}),
  name: 'clearable',

  args: {
    clearable: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const Fluid = {
  render: Template.bind({}),
  name: 'fluid',

  args: {
    fluid: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const Inline = {
  render: Template.bind({}),
  name: 'inline',

  args: {
    inline: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const MaxItems = {
  render: Template.bind({}),
  name: 'maxItems',

  args: {
    direction: 'down',
    maxItems: 8,
    data: data,
    placeholder: 'Select domain',
    label: (item) => item.name,
    onSearch: null,
  },
};

export const OnSearch = {
  render: Template.bind({}),
  name: 'onSearch',

  args: {
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: () => {},
  },
};

export const Weight = {
  render: WeightTemplate.bind({}),
  name: 'weight',

  args: {
    fluid: true,
    direction: 'down',
    maxItems: 4,
    data: people,
    placeholder: 'Select person',
    label: (item) => item.name,
    onSearch: null,
  },
};
