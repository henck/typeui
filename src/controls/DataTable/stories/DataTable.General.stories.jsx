import { DataTable } from '../DataTable';

const data = [
  { name: 'John', age: 24, sport: 'Soccer' },
  { name: 'Mary', age: 18, sport: 'Polo' },
  { name: 'Bert', age: 21, sport: 'Basketball' },
  { name: 'Joseph', age: 24, sport: 'Kendo' },
  { name: 'Rose', age: 17, sport: 'Soccer' },
  { name: 'Alexander', age: 15, sport: 'Athletics' },
  { name: 'Rudolph', age: 29, sport: 'Krav maga' },
  { name: 'Jessica', age: 19, sport: 'None' },
  { name: 'Ellen', age: 16, sport: 'Athletics' },
  { name: 'Ralph', age: 22, sport: 'Volleyball' },
];

const Template = (args) => (
  <div style={{ display: 'flex', position: 'relative', height: '400px' }}>
    <DataTable data={data} {...args}>
      <DataTable.Column weight={2} label="Name" order="name" dir="asc">
        {(item) => item.name}
      </DataTable.Column>
      <DataTable.Column weight={1} label="Age" order="age" dir="asc">
        {(item) => item.age}
      </DataTable.Column>
      <DataTable.Column weight={1} label="Sport" order="sport" dir="asc">
        {(item) => item.sport}
      </DataTable.Column>
    </DataTable>
  </div>
);

export default {
  title: 'Controls/DataTable/General',
  component: DataTable,

  subcomponents: {
    'DataTable.Column': DataTable.Column,
  },

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Order = {
  render: Template.bind({}),
  name: 'order',

  args: {
    order: 'name',
    dir: 'asc',
    onClick: null,
  },
};

export const OnClick = {
  render: Template.bind({}),
  name: 'onClick',

  args: {
    onClick: () => {},
    onOrder: null,
  },
};
