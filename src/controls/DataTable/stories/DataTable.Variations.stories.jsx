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
    <DataTable {...args}>
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

const ForceTemplate = (args) => (
  <div style={{ display: 'flex', position: 'relative', height: '400px' }}>
    <DataTable
      {...args}
      data={[
        { code: 'AF', name: 'Afghanistan', desc: 'A country somewhere in the world.' },
        { code: 'AL', name: 'Albania', desc: 'A country somewhere in the world.' },
        { code: 'DZ', name: 'Algeria', desc: 'A country somewhere in the world.' },
        { code: 'AS', name: 'American Samoa', desc: 'A country somewhere in the world.' },
      ]}
    >
      <DataTable.Column weight={1} label="Code" force>
        {(item) => item.code}
      </DataTable.Column>
      <DataTable.Column weight={1} label="Name" force>
        {(item) => item.name}
      </DataTable.Column>
      <DataTable.Column weight={1} label="Desc">
        {(item) => item.desc}
      </DataTable.Column>
    </DataTable>
  </div>
);

export default {
  title: 'Controls/DataTable/Variations',
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

export const Error = {
  render: Template.bind({}),
  name: 'error',

  args: {
    data: data,
    error: true,
    onOrder: null,
    onClick: null,
    onFetch: null,
  },
};

export const ErrorMessage = {
  render: Template.bind({}),
  name: 'errorMessage',

  args: {
    data: data,
    error: true,
    errorMessage: 'Too bad: an error occurred!',
    onOrder: null,
    onClick: null,
  },
};

export const Force = {
  render: ForceTemplate.bind({}),
  name: 'force',

  args: {
    force: true,
    onOrder: null,
    onClick: null,
  },
};

export const Grid = {
  render: Template.bind({}),
  name: 'grid',

  args: {
    data: data,
    grid: true,
    onOrder: null,
    onClick: null,
  },
};

export const Loading = {
  render: Template.bind({}),
  name: 'loading',

  args: {
    data: data,
    loading: true,
    onOrder: null,
    onClick: null,
  },
};

export const Nodata = {
  render: Template.bind({}),
  name: 'nodata',

  args: {
    data: [],
    nodata: 'There was no data to load!',
    onOrder: null,
    onClick: null,
  },
};

export const ScrollPosition = {
  render: Template.bind({}),
  name: 'scrollPosition',

  args: {
    data: data,
    scrollTop: 60,
    onScroll: (scrollTop) => {},
    onOrder: null,
    onClick: null,
  },
};
